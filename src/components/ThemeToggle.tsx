'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <MenuButton className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'>
        {theme === 'light' && <SunIcon className='h-5 w-5' />}
        {theme === 'dark' && <MoonIcon className='h-5 w-5' />}
        {theme === 'system' && <ComputerDesktopIcon className='h-5 w-5' />}
      </MenuButton>
      <MenuItems className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-600 dark:bg-gray-700'>
        <div className='px-1 py-1'>
          <MenuItem>
            {({ active }: { active: boolean }) => (
              <button
                className={`${
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('light')}
              >
                <SunIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                Light Mode
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }: { active: boolean }) => (
              <button
                className={`${
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('dark')}
              >
                <MoonIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                Dark Mode
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }: { active: boolean }) => (
              <button
                className={`${
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={() => setTheme('system')}
              >
                <ComputerDesktopIcon
                  className='mr-2 h-5 w-5'
                  aria-hidden='true'
                />
                System
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
