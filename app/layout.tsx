import './globals.css'

export const metadata = {
  title: 'EbookIA',
  description: 'Landing page do ebook',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
