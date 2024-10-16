import { TeamMember } from '@/data/teamInfo';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Card = ({ member }: { member: TeamMember }) => {
  return (
    <div className='group relative block h-[18rem] overflow-hidden rounded-lg bg-black sm:h-[25rem] lg:h-[30rem]'>
      <Image
        alt={member.name1}
        src={member.imageUrl || 'https://via.placeholder.com/300'}
        width={300}
        height={300}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6'>
        <div>
          <p
            className='text-sm font-semibold uppercase tracking-widest text-blue-400'
            style={{
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {member.role}
          </p>

          <p className='text-xl font-bold text-white sm:text-2xl'>
            {member.name1}
            {member.name2 && ` / ${member.name2}`}
          </p>
        </div>

        <div className='transform opacity-0 transition-all group-hover:opacity-100'>
          <p className='mb-2 text-sm font-bold text-white'>{member.major}</p>
          <p className='mb-4 text-sm text-white'>{member.comment}</p>
          <div className='flex space-x-2'>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className='flex items-center gap-2 text-sm font-light text-white hover:text-blue-500'
              >
                <EnvelopeIcon className='h-6 w-6' />
                {member.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
