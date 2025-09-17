import './globals.css';
import Link from 'next/link';
import Footer from '../app/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased relative">
        <div className="fixed top-4 right-4 z-50 sm:right-4 sm:top-4 w-full sm:w-auto flex justify-center sm:justify-end">
          <nav className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              Sobre
            </Link>
          </nav>
        </div>
        <main className="max-w-4xl mx-auto px-4 py-20 sm:py-8">{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
