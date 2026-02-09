import './print.css';
import './global.css'
// Denormalized path to bypass alias issues
import ActorNav from '../components/ActorNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen antialiased">
        <main>{children}</main>
        <ActorNav />
      </body>
    </html>
  )
}