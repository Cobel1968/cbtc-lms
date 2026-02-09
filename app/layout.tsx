import './globals.css';
export const metadata = { title: 'Cobel Business Training Center', description: 'LMS with Adaptive Learning' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
