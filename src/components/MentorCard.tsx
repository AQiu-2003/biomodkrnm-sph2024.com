import { Mentor } from '@/data/mentorInfo';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  return (
    <div className='group relative block h-[16rem] overflow-hidden rounded-lg bg-black sm:h-[20rem]'>
      <Image
        alt={mentor.name1}
        src={mentor.imageUrl}
        width={300}
        height={300}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative flex h-full flex-col justify-between p-3 sm:p-4'>
        <div>
          <p className='mb-1 text-lg font-bold text-white sm:text-xl'>
            {mentor.name1}
            {mentor.name2 && ` / ${mentor.name2}`}
          </p>
          <div className='flex flex-wrap gap-1.5 opacity-0 transition-opacity group-hover:opacity-100'>
            <span
              className='inline-flex items-center rounded-full bg-blue-400/80 px-2 py-0.5 text-xs font-semibold text-white'
              style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              {mentor.title}
            </span>
          </div>
        </div>

        <div className='transform opacity-0 transition-all group-hover:opacity-100'>
          <p className='mb-2 text-xs text-white sm:text-sm'>{mentor.department}</p>
          <div className='flex space-x-2'>
            {mentor.email && (
              <a
                href={`mailto:${mentor.email}`}
                className='flex items-center gap-1.5 text-xs font-light text-white hover:text-blue-500 sm:text-sm'
              >
                <EnvelopeIcon className='h-4 w-4 sm:h-5 sm:w-5' />
                {mentor.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard; 