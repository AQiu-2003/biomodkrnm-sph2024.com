import { websiteMetaData } from '@/data/websiteMetaData';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-sky-900 text-gray-300 dark:bg-gray-700'>
      <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='space-y-2'>
          <div className='mb-4 md:mb-0'>
            <p>
              Copyright &copy; {new Date().getFullYear()}{' '}
              {websiteMetaData.title} All rights reserved. Developed by
              <Link
                href={websiteMetaData.developer.github}
                target='_blank'
                className='ml-1 text-sky-400 hover:text-sky-800'
              >
                {websiteMetaData.developer.name}
              </Link>
              .
            </p>
          </div>
          <div className='flex gap-2'>
            <p>Contact us:</p>
            <a
              href={`mailto:${websiteMetaData.contactEmail}`}
              className='text-sky-400 hover:text-sky-800'
            >
              {websiteMetaData.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
