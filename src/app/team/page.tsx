import TeamMemberCard from '@/components/TeamMemberCard';
import { teamMembers } from '@/data/teamInfo';
import FacultyMentors from '@/data/faculty-mentors.mdx';
import * as motion from 'framer-motion/client';

export default function TeamPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-12'>
      <h1 className='mb-8 text-4xl font-bold'>Our Team</h1>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <TeamMemberCard key={index} member={member} />
          </motion.div>
        ))}
      </div>
      <h1 className='mt-8 text-4xl font-bold'>Faculty Mentors</h1>
      <div className='prose w-full max-w-none dark:prose-invert'>
        <FacultyMentors />
      </div>
    </div>
  );
}
