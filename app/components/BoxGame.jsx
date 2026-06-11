'use client'
import { useEffect, useRef, useState } from 'react'

const COLORS = [
  { bg: '#EEEDFE', border: '#534AB7', text: '#3C3489' },
  { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
  { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
  { bg: '#FAEEDA', border: '#BA7517', text: '#854F0B' },
  { bg: '#FBEAF0', border: '#993556', text: '#72243E' },
]

const LABELS = ['📦', '🎁', '⬛', '🟦', '🔲']
const GRAVITY = 0.4
const BOUNCE = 0.45
const FRICTION = 0.88

export default function BoxGame() {
  const containerRef = useRef(null)
  const targetRef = useRef(null)
  const aimRef = useRef(null)
  const boxesRef = useRef([])
  const draggingRef = useRef(null)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const dragCurRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  const [score, setScore] = useState(0)
  const [thrown, setThrown] = useState(0)
  const [inTarget, setInTarget] = useState(0)
  const [showMsg, setShowMsg] = useState(true)

  function getTargetRect() {
    const cr = containerRef.current.getBoundingClientRect()
    const tr = targetRef.current.getBoundingClientRect()
    return { x: tr.left - cr.left, y: tr.top - cr.top, w: tr.width, h: tr.height }
  }

  function spawnBox(x, y) {
    setShowMsg(false)
    const size = 44 + Math.floor(Math.random() * 20)
    const c = COLORS[Math.floor(Math.random() * COLORS.length)]
    const label = LABELS[Math.floor(Math.random() * LABELS.length)]

    const el = document.createElement('div')
    el.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      background:${c.bg};
      border:1.5px solid ${c.border};
      color:${c.text};
      left:${x - size / 2}px;
      top:${y - size / 2}px;
      border-radius:8px;
      display:flex;align-items:center;justify-content:center;
      font-size:11px;font-weight:500;
      user-select:none;
      cursor:grab;
    `
    el.textContent = label
    containerRef.current.appendChild(el)

    const box = { el, x: x - size / 2, y: y - size / 2, vx: 0, vy: 0, size, scored: false }
    boxesRef.current.push(box)
    return box
  }

  function startDrag(box, cx, cy) {
    draggingRef.current = box
    dragStartRef.current = { x: cx, y: cy }
    dragCurRef.current = { x: cx, y: cy }
    box.el.style.boxShadow = '0 0 0 3px #378ADD55'
    box.el.style.cursor = 'grabbing'
  }

  function drawAim(startX, startY, curX, curY) {
    const dx = startX - curX
    const dy = startY - curY
    const steps = 10
    let pts = []
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const px = curX + dx * t * 0.6
      const py = curY + dy * t * 0.6 + 80 * t * t
      pts.push(`${px},${py}`)
    }
    aimRef.current.innerHTML = `
      <polyline
        points="${pts.join(' ')}"
        fill="none"
        stroke="#378ADD"
        stroke-width="1.5"
        stroke-dasharray="4 4"
        opacity="0.6"
      />`
  }

  function clearAim() {
    if (aimRef.current) aimRef.current.innerHTML = ''
  }

  function showPop(x, y, text) {
    const el = document.createElement('div')
    el.textContent = text
    el.style.cssText = `
      position:absolute;left:${x}px;top:${y}px;
      font-size:15px;font-weight:500;
      color:#3B6D11;pointer-events:none;
      transition:all 0.6s;
    `
    containerRef.current.appendChild(el)
    setTimeout(() => { el.style.top = (y - 40) + 'px'; el.style.opacity = '0' }, 50)
    setTimeout(() => el.remove(), 700)
  }

  function physics() {
    const container = containerRef.current
    if (!container) return
    const W = container.clientWidth
    const H = container.clientHeight
    const tr = getTargetRect()

    boxesRef.current.forEach(box => {
      if (draggingRef.current === box) return

      box.vy += GRAVITY
      box.x += box.vx
      box.y += box.vy

      if (box.x < 0) { box.x = 0; box.vx *= -BOUNCE }
      if (box.x + box.size > W) { box.x = W - box.size; box.vx *= -BOUNCE }
      if (box.y + box.size >= H) {
        box.y = H - box.size
        box.vy *= -BOUNCE
        box.vx *= FRICTION
        if (Math.abs(box.vy) < 1) { box.vy = 0; box.vx *= 0.85 }
      }

      box.el.style.left = Math.round(box.x) + 'px'
      box.el.style.top = Math.round(box.y) + 'px'

      if (!box.scored) {
        const bx = box.x + box.size / 2
        const by = box.y + box.size / 2
        if (bx > tr.x && bx < tr.x + tr.w && by > tr.y && by < tr.y + tr.h) {
          box.scored = true
          box.el.style.background = '#EAF3DE'
          box.el.style.border = '1.5px solid #3B6D11'
          box.el.style.color = '#27500A'
          showPop(box.x + box.size / 2, box.y, '+10')
          setScore(s => s + 10)
          setInTarget(i => i + 1)
        }
      }
    })

    animRef.current = requestAnimationFrame(physics)
  }

  useEffect(() => {
    const container = containerRef.current

    const onMouseDown = (e) => {
      if (e.target === targetRef.current) return
      const rect = container.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      const hit = boxesRef.current.find(b =>
        cx >= b.x && cx <= b.x + b.size && cy >= b.y && cy <= b.y + b.size
      )
      if (hit) { startDrag(hit, cx, cy); return }
      const box = spawnBox(cx, cy)
      startDrag(box, cx, cy)
    }

    const onMouseMove = (e) => {
      if (!draggingRef.current) return
      const rect = container.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      dragCurRef.current = { x: cx, y: cy }
      draggingRef.current.x = cx - draggingRef.current.size / 2
      draggingRef.current.y = cy - draggingRef.current.size / 2
      draggingRef.current.el.style.left = draggingRef.current.x + 'px'
      draggingRef.current.el.style.top = draggingRef.current.y + 'px'
      drawAim(dragStartRef.current.x, dragStartRef.current.y, cx, cy)
    }

    const onMouseUp = (e) => {
      if (!draggingRef.current) return
      const rect = container.getBoundingClientRect()
      const upX = e.clientX - rect.left
      const upY = e.clientY - rect.top
      const dx = dragStartRef.current.x - upX
      const dy = dragStartRef.current.y - upY
      draggingRef.current.vx = dx * 0.18
      draggingRef.current.vy = dy * 0.18
      draggingRef.current.el.style.boxShadow = ''
      draggingRef.current.el.style.cursor = 'grab'
      draggingRef.current = null
      clearAim()
      setThrown(t => t + 1)
    }

    container.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    animRef.current = requestAnimationFrame(physics)

    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  function reset() {
    boxesRef.current.forEach(b => b.el.remove())
    boxesRef.current = []
    setScore(0)
    setThrown(0)
    setInTarget(0)
    setShowMsg(true)
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">

      {/* Score Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex gap-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Score <span className="text-base font-medium text-gray-900 dark:text-white ml-1">{score}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Thrown <span className="text-base font-medium text-gray-900 dark:text-white ml-1">{thrown}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            In Target <span className="text-base font-medium text-gray-900 dark:text-white ml-1">{inTarget}</span>
          </p>
        </div>
        <button
          onClick={reset}
          className="text-xs px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
        >
          Reset
        </button>
      </div>

      {/* Game Area */}
      <div
        ref={containerRef}
        className="relative w-full h-[480px] bg-zinc-50 dark:bg-zinc-800 cursor-crosshair overflow-hidden"
      >
        {showMsg && (
          <p className="absolute inset-0 flex items-center justify-center text-sm text-gray-400 pointer-events-none text-center px-4">
            Click to spawn a box · Drag back and release to throw
          </p>
        )}

        {/* Target */}
        <div
          ref={targetRef}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-24 h-24 rounded-xl border-2 border-dashed border-blue-400 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-xs text-blue-400 pointer-events-none"
        >
          Drop here
        </div>

        {/* Aim Line */}
        <svg
          ref={aimRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </div>
  )
}