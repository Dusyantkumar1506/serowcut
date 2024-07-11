import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickySocialMediaBar from "./components/StickySocialMediaBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEROWCUT",
  description:
    "Welcome to SEROWCUT! We specialize in high-quality electrical services, offering expertise in a wide range of products including sockets, switches, switchgear, and protection devices. Our commitment to excellence ensures top-notch solutions tailored to your needs. Let's power up your projects together!",
  icons: {
    icon: ["/davicon.io?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-primary">
          <Header />
          {children}
          <StickySocialMediaBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
