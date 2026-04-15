import type { Metadata } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Willem Marchety-Concy — Développeur Web & Designer',
  description:
    'Portfolio de Willem Marchety-Concy, développeur web passionné par la création de sites modernes et performants. Disponible en alternance à Paris, septembre 2026.',
  keywords: ['développeur web', 'designer', 'portfolio', 'alternance', 'Paris', 'Next.js', 'React'],
  authors: [{ name: 'Willem Marchety-Concy' }],
  openGraph: {
    title: 'Willem Marchety-Concy — Développeur Web & Designer',
    description: 'Développeur web passionné, disponible en alternance à Paris en septembre 2026.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-[#F5F5F5] font-inter antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
