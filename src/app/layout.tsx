import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { StyledEngineProvider } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Forward',
  description:
    '[Fashion Forward Clothing Co.] Fashion stores always offer models each year. In fact, this is a great exercise in e-commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledEngineProvider>
    </html>
  );
}
