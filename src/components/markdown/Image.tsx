import NextImage from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

export default function Image({
  src,
  alt,
  ...props
}: ComponentPropsWithoutRef<'img'>) {
  let height: number | undefined;
  let note: string | undefined;

  if (alt && alt.split('@').length > 1) {
    const [h, n] = alt.split('@');
    height = parseInt(h);
    note = n;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <NextImage
        src={src ?? ''}
        alt={note ?? alt ?? ''}
        // @ts-expect-error god knows why ts complains
        height={height ?? 400}
        {...props}
        className='rounded-xl'
      />
      {alt && (
        <div className='-mt-4 text-center text-lg font-bold w-[80%]'>{note ?? alt}</div>
      )}
    </div>
  );
}
