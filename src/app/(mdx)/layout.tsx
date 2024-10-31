import React from 'react';
import TableOfContents from '@/components/TableOfContents';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4">
      <TableOfContents />
      <article className="prose flex-1 max-w-none lg:prose-xl dark:prose-invert lg:ml-64 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        {children}
      </article>
    </div>
  );
}
