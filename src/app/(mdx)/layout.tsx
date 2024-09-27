import React from 'react';

export default function MarkwodnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className='prose max-w-none lg:prose-xl dark:prose-invert'>
      {children}
    </article>
  );
}
