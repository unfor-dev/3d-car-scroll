import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Mercedes-Benz Brabus",
  description: "Mercedes-Benz Brabus by Unfor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Mercedes-Benz Brabus</h1>
      </body>
    </html>
  );
}