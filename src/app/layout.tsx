import FixedBottomRightWrapper from '@/components/FixedBottomRightWrapper';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { websiteMetaData } from '@/data/websiteMetaData';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: websiteMetaData.title,
  description: websiteMetaData.description,
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png' }],
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
            <LayoutWrapper>
              <main className='mx-auto mt-10 max-w-7xl flex-grow px-4 sm:px-6 lg:px-8'>
                {children}
              </main>
            </LayoutWrapper>
            <Footer />
            <FixedBottomRightWrapper>
              <ScrollToTopButton />
              <ThemeToggle />
            </FixedBottomRightWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
