import TeamMemberCard from '@/components/TeamMemberCard';
import { teamMembers } from '@/data/teamInfo';
import FacultyMentors from '@/data/faculty-mentors.mdx';

export default function TeamPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-12'>
      <h1 className='mb-8 text-4xl font-bold'>Our Team</h1>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
      <h1 className='mt-8 text-4xl font-bold'>Faculty Mentors</h1>
      <div className='w-full prose max-w-none'>
        <FacultyMentors />
      </div>
    </div>
  );
}
