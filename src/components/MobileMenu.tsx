import { HeaderNavItem, headerNavItems } from '@/data/headerConfig';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='fixed inset-0 z-50 overflow-y-auto bg-white dark:bg-gray-900'
        >
          <div className='p-4'>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute right-4 top-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            >
              <XMarkIcon className='h-8 w-8' />
            </button>
            <nav className='mt-12'>
              {headerNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='py-2'
                >
                  {item.children ? (
                    <MobileMenuDropdown item={item} setIsOpen={setIsOpen} />
                  ) : (
                    <Link
                      href={item.href}
                      className='block rounded-lg bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileMenuDropdown({
  item,
  setIsOpen,
}: {
  item: HeaderNavItem;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [isOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDropdownOpen(!isOpen)}
        className='flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
      >
        <span>{item.name}</span>
        <ChevronDownIcon
          className={`${
            isOpen ? 'rotate-180 transform' : ''
          } h-5 w-5 text-gray-500 dark:text-gray-400`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='px-4 pb-2 pt-2 text-gray-700 dark:text-gray-300'
          >
            {item.children!.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className='block py-2 hover:text-gray-900 dark:hover:text-gray-100'
                onClick={() => setIsOpen(false)}
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
