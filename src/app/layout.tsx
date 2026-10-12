import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { RouteLoadingScreen } from '@/components/common/RouteLoadingScreen';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });

export const metadata: Metadata = {
  title: 'R.I.M.B.A — Ruang Interaktif Mengenal Bencana dan Alam',
  description: 'Platform edukasi interaktif ramah anak untuk mengenal pencegahan kebakaran hutan dan lahan (Karhutla) di Indonesia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${lexend.variable}`}>
      <body className="min-h-screen flex flex-col bg-earth-cream antialiased selection:bg-rimba-200 selection:text-rimba-900">
        <RouteLoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}