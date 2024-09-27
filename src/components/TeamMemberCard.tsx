import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { TeamMember } from '@/data/teamInfo';
import Image from 'next/image';

const Card = ({ member }: { member: TeamMember }) => {
  return (
    <div className='group relative block bg-black'>
      <Image
        alt={member.name1}
        src={member.imageUrl || 'https://via.placeholder.com/300'}
        width={300}
        height={300}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative p-4 sm:p-5 lg:p-6'>
        <p className='text-sm font-semibold uppercase tracking-widest text-blue-500'>
          {member.role}
        </p>

        <p className='text-xl font-bold text-white sm:text-2xl'>
          {member.name1}
          {member.name2 && ` / ${member.name2}`}
        </p>

        <div className='mt-32 sm:mt-48 lg:mt-64'>
          <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <p className='mb-2 text-sm text-white'>{member.major}</p>
            <p className='mb-4 text-sm text-white'>{member.comment}</p>
            <div className='flex space-x-2'>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className='text-white hover:text-blue-500'
                >
                  <EnvelopeIcon className='h-6 w-6' />
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className='text-white hover:text-blue-500'
                >
                  <PhoneIcon className='h-6 w-6' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
