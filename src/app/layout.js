import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "University",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
