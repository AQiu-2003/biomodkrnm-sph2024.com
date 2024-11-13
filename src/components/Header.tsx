'use client';
import DropdownMenu from '@/components/DropdownMenu';
import { headerNavItems } from '@/data/headerConfig';
import { websiteMetaData } from '@/data/websiteMetaData';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Do_Hyeon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const doHyeon = Do_Hyeon({
  weight: '400',
  subsets: ['latin'],
});

interface HeaderProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ setMobileMenuOpen }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-sky-900 bg-opacity-80 shadow-md backdrop-blur-md dark:bg-sky-950 ${doHyeon.className}`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link className='flex items-center' href='/'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src={websiteMetaData.logo}
                alt='Logo'
                width={50}
                height={50}
                className='drop-shadow-md transition-transform duration-500 ease-in-out'
              />
            </motion.div>
            <motion.div
              className={`${doHyeon.className} ml-4 text-center text-3xl font-bold text-white drop-shadow-lg`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                textShadow: '0px 0px 20px rgba(255,255,255,0.8)',
                transition: { duration: 0.2 },
              }}
            >
              {websiteMetaData.title}
            </motion.div>
          </Link>
          <div className='flex items-center'>
            <nav className='mr-6 hidden space-x-6 lg:flex'>
              {headerNavItems.map((item) => (
                <div
                  key={item.name}
                  className='relative transition-all duration-300 hover:scale-110 hover:drop-shadow-lg active:scale-95'
                >
                  {item.children ? (
                    <DropdownMenu item={item} isActive={isActive(item.href)} />
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-2xl font-medium tracking-widest ${
                        isActive(item.href)
                          ? 'border-b-2 border-sky-200 text-sky-200'
                          : 'widest text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className='ml-4 lg:hidden'>
              <button
                className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
