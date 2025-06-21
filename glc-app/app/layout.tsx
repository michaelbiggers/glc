import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "./footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
        {Footer()}
      </body>
      <GoogleAnalytics gaId="G-K5LZGWBEHJ" />
    </html>
  );
}
