import { HeaderNavItem } from '@/data/headerConfig';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

interface DropdownMenuProps {
  item: HeaderNavItem;
  isActive: boolean;
}

export default function DropdownMenu({ item, isActive }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='relative inline-block text-left'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className={`text-lg font-medium tracking-widest ${
          isActive
            ? 'border-b-2 border-sky-200 text-sky-200'
            : 'widest text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white'
        }`}
      >
        {item.name}
      </Link>
      <Transition
        show={isOpen}
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div>
          <div className='absolute h-4 w-full' />
          <div className='absolute z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800'>
            <div className='py-1'>
              {item.children?.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className='block px-4 py-2 text-sm font-medium tracking-widest text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
