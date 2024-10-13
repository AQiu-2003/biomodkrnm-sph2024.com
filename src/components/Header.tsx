'use client';
import DropdownMenu from '@/components/DropdownMenu';
import ThemeToggle from '@/components/ThemeToggle';
import { headerNavItems } from '@/data/headerConfig';
import { websiteMetaData } from '@/data/websiteMetaData';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ setMobileMenuOpen }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className='sticky top-0 z-50 bg-sky-900 bg-opacity-80 shadow-md backdrop-blur-md dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-6'>
          <Link className='flex items-center' href='/'>
            <Image
              src={websiteMetaData.logo}
              alt='Logo'
              width={40}
              height={40}
              className='drop-shadow-md'
            />
            <span className='ml-2 text-2xl font-bold text-white sha'>
              {websiteMetaData.title}
            </span>
          </Link>
          <div className='flex items-center'>
            <nav className='mr-6 hidden space-x-6 md:flex'>
              {headerNavItems.map((item) => (
                <div key={item.name} className='relative'>
                  {item.children ? (
                    <DropdownMenu item={item} isActive={isActive(item.href)} />
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-lg ${
                        isActive(item.href)
                          ? 'text-sky-200 border-b-2 border-sky-200'
                          : 'text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <ThemeToggle />
            <div className='ml-4 md:hidden'>
              <button
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
