'use client';

import React from 'react';
import TableOfContents from '@/components/TableOfContents';
import { usePathname } from 'next/navigation';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideTableOfContents = pathname === '/experiment';

  return (
    <div className='mx-auto flex max-w-7xl gap-4 lg:px-4 2xl:px-0'>
      {!hideTableOfContents && <TableOfContents />}
      <article className={`z-10 opacity-95 prose mb-8 max-w-none flex-1 rounded-xl bg-white p-5 transition-shadow duration-300 dark:prose-invert lg:prose-lg dark:bg-gray-800 ${!hideTableOfContents ? 'lg:ml-40 2xl:ml-0' : ''} lg:p-10 lg:shadow-[0_0_15px_rgba(59,130,246,0.3)] lg:hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] prose-p:text-justify`}>
        {children}
      </article>
    </div>
  );
}
