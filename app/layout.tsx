import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/Navbar/Navbar";
const font = Nunito({
  subsets: ["latin"]

})

export const metadata = {
  title: 'baAma Consultant',
  description: 'a pharmaceutical consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
     <Navbar/>
      {children}</body>
    </html>
  )
}
