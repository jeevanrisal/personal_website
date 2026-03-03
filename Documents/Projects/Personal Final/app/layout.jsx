import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Jeevan Risal | Graduate Software Engineer",
  description:
    "Portfolio of Jeevan Risal - Graduate Software Engineer focused on full-stack delivery, practical frontend systems, and AI-curious product development."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
