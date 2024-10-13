import LayoutWrapper from '@/components/LayoutWrapper';
import { ThemeProvider } from '@/components/ThemeProvider';
import { websiteMetaData } from '@/data/websiteMetaData';
import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
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
      <body className={`${space_grotesk.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
            <LayoutWrapper>
              <main className='mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8'>
                {children}
              </main>
            </LayoutWrapper>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
