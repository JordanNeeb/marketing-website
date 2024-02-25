import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jordan Neeb | Full Stack Developer",
  description:
    "I'm a web developer with an eye for design and a love for writing clean, efficient code.",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-white" lang="en">
      <body className={`${montserrat.className} bg-white`}>{children}</body>
    </html>
  );
}
