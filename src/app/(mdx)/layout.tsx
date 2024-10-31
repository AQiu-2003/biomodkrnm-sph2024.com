import React from 'react';
import TableOfContents from '@/components/TableOfContents';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto flex max-w-7xl gap-8 lg:px-4'>
      <TableOfContents />
      <article className='prose max-w-none flex-1 rounded-xl bg-white p-5 lg:p-10 transition-shadow duration-300 dark:prose-invert lg:prose-xl dark:bg-gray-800 lg:ml-64 lg:shadow-lg lg:hover:shadow-xl'>
        {children}
      </article>
    </div>
  );
}
