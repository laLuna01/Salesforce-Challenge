import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../../public/clickCapture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge Salesforce",
  description: "Projeto para o challenge da Salesforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        <script src="./clickCapture.js" defer></script>
        {children}
        <script src="./chatbot.js" defer></script>
        <Footer/>
      </body>
    </html>
  );
}
