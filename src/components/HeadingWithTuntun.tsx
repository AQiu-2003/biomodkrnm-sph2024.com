import { LinkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Divider from './Divider';

interface HeadingWithTuntunProps {
  title: string;
  children: React.ReactNode;
  mt?: number;
}

export default function HeadingWithTuntun({
  title,
  mt = 1.8,
  children,
}: HeadingWithTuntunProps) {
  return (
    <div className='relative'>
      <div className='prose dark:prose-invert lg:prose-lg'>
        <h2
          className='group'
          style={{
            marginBottom: '0.5rem',
            marginTop: `${mt}rem`,
          }}
        >
          <div id={title} className='anchor absolute -top-24' />
          <a
            href={`#${title}`}
            className='absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 lg:-left-8'
            aria-label={`Link to ${title}`}
          >
            <LinkIcon className='h-3 w-3 lg:h-5 lg:w-5' />
          </a>
          {title}
        </h2>
      </div>
      <div className='not-prose'>{children}</div>
      <Divider />
    </div>
  );
}
