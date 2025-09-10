import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Judens Bandal Porfolio",
  description: "Java Developer Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
        suppressContentEditableWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
