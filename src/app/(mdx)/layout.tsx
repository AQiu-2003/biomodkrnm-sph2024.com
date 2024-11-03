import React from 'react';
import TableOfContents from '@/components/TableOfContents';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto flex max-w-7xl gap-4 lg:px-4'>
      <TableOfContents />
      <article className='prose mb-8 max-w-none flex-1 rounded-xl bg-white p-5 transition-shadow duration-300 dark:prose-invert lg:prose-lg dark:bg-gray-800 lg:ml-56 lg:p-10 lg:shadow-[0_0_15px_rgba(59,130,246,0.3)] lg:hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]'>
        {children}
      </article>
    </div>
  );
}
