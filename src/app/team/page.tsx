'use client';

import MentorCard from '@/components/MentorCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import { professors, seniors } from '@/data/mentorInfo';
import { teamMembers } from '@/data/teamInfo';
import teamPhoto from '@/data/teamPhoto.jpeg';
import { motion, useInView } from 'framer-motion';
import { Righteous } from 'next/font/google';
import Image from 'next/image';
import { useRef } from 'react';

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
});

export default function TeamPage() {
  const teamMembersRef = useRef(null);
  const professorsRef = useRef(null);
  const seniorsRef = useRef(null);

  const teamMembersInView = useInView(teamMembersRef, {
    once: true,
    amount: 0.2,
  });
  const professorsInView = useInView(professorsRef, {
    once: true,
    amount: 0.2,
  });
  const seniorsInView = useInView(seniorsRef, { once: true, amount: 0.2 });

  return (
    <div className='mb-12 flex min-h-screen flex-col items-center justify-center'>
      <div className='relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[800px]'>
        <motion.div
          className='absolute inset-0 z-0 h-full w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={teamPhoto}
            alt='Team Photo'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 from-10% via-black/50 via-20% to-transparent to-30%' />
        </motion.div>

        <motion.h1
          className={`${righteous.className} mt-16 text-center text-6xl font-bold text-white drop-shadow-lg`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 20px rgba(255,255,255,0.8)',
            transition: { duration: 0.2 },
          }}
        >
          Our Team
        </motion.h1>
      </div>

      <motion.h1
        className={`${righteous.className} mt-16 text-5xl font-bold`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 20px rgba(255,255,255,0.8)',
          transition: { duration: 0.2 },
        }}
      >
        Team Members
      </motion.h1>

      <div
        ref={teamMembersRef}
        className='mt-8 grid w-full max-w-[90rem] grid-cols-1 justify-items-center gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className='w-full max-w-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={
              teamMembersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              opacity: { delay: index * 0.2, duration: 0.5 },
              y: { delay: index * 0.2, duration: 0.5 },
            }}
            whileHover={{
              scale: 1.03,
              transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0,
              },
            }}
          >
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </div>

      <motion.h1
        className={`${righteous.className} mt-24 text-5xl font-bold`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 20px rgba(255,255,255,0.8)',
          transition: { duration: 0.2 },
        }}
      >
        Faculty Mentors
      </motion.h1>

      <h2 className='mt-8 text-3xl font-semibold'>Professors</h2>
      <div
        ref={professorsRef}
        className='mt-6 grid w-full max-w-[90rem] grid-cols-2 justify-items-center gap-6 px-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      >
        {professors.map((mentor, index) => (
          <motion.div
            key={index}
            className='w-full max-w-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={
              professorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              opacity: { delay: index * 0.2, duration: 0.5 },
              y: { delay: index * 0.2, duration: 0.5 },
            }}
            whileHover={{
              scale: 1.03,
              transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0,
              },
            }}
          >
            <MentorCard mentor={mentor} />
          </motion.div>
        ))}
      </div>

      <h2 className='mt-12 text-3xl font-semibold'>Seniors</h2>
      <div
        ref={seniorsRef}
        className='mt-6 grid w-full max-w-[90rem] grid-cols-2 justify-items-center gap-6 px-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      >
        {seniors.map((mentor, index) => (
          <motion.div
            key={index}
            className='w-full max-w-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={
              seniorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              opacity: { delay: index * 0.2, duration: 0.5 },
              y: { delay: index * 0.2, duration: 0.5 },
            }}
            whileHover={{
              scale: 1.03,
              transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0,
              },
            }}
          >
            <MentorCard mentor={mentor} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
