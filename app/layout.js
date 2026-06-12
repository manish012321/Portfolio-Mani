import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish Suriyal",
  description: "Full Stack Developer Portfolio",
  icons : {
    icon:"/favicon.svg"
  }
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>       {/* ← handles dark + Navbar */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}