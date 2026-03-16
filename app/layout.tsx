import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maratón Familiar Pachamama 2026 | Desafío Pringles Sinsacate',
  description: 'Maratón comunitaria organizada por el Centro Educativo Coronel Pringles. Corramos juntos por nuestra Tierra. 18 de abril de 2026, Sinsacate, Córdoba.',
  keywords: ['maratón', 'pachamama', 'día de la tierra', 'sinsacate', 'córdoba', 'running', 'desafío pringles'],
  openGraph: {
    title: 'Maratón Familiar Pachamama 2026',
    description: 'Corramos juntos por nuestra Tierra. 18 de abril de 2026, Sinsacate, Córdoba.',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={nunito.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
