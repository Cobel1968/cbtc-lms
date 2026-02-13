export const metadata = {
  title: 'Cobel LMS - Vocational Engine',
  description: 'Bilingual Technical Mapping Diagnostic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
