import LiYunzePhoto from './teamMemberPhotos/Li Yunze.jpg';
import PeichenXiePhoto from './teamMemberPhotos/Peichen Xie.jpg';
import WeiKongPhoto from './teamMemberPhotos/Wei Kong.jpg';
import YimingWangPhoto from './teamMemberPhotos/Yiming Wang.jpg';
import FeiFangPhoto from './teamMemberPhotos/Fei Fang.jpg';
import YunfanYangPhoto from './teamMemberPhotos/Yunfan Yang.jpg';
import TianLuanPhoto from './teamMemberPhotos/Tian Luan.jpg';
import MingshuoLiPhoto from './teamMemberPhotos/Mingshuo Li.jpg';
import { StaticImageData } from 'next/image';

export interface TeamMember {
  name1: string; // main name to display
  name2?: string; // may be english name or nickname
  major: string;
  role: string;
  comment: string;
  email?: string;
  phone?: string;
  imageUrl: StaticImageData | string;
}

export const teamMembers: TeamMember[] = [
  {
    name1: 'Li Yunze',
    name2: '李昀泽',
    major: 'Radiation Medicine',
    role: 'Experimental',
    comment:
      'I like listening to music and sleeping. I hope I can make good friends during this competition trip.',
    imageUrl: LiYunzePhoto,
  },
  {
    name1: 'Peichen Xie',
    name2: '谢沛辰',
    major: 'Radiation Medicine',
    role: 'Experimental',
    comment: 'Anxiety is the dizziness of freedom',
    imageUrl: PeichenXiePhoto,
  },
  {
    name1: 'Wei Kong',
    name2: '孔玮',
    major: 'Preventive Medicine',
    role: 'Experimental',
    comment: 'Full of hope, one will be invincible',
    imageUrl: WeiKongPhoto,
  },
  {
    name1: 'Yiming Wang',
    name2: '汪一鸣',
    major: 'Preventive Medicine',
    role: 'Wiki & Writer & Experiment',
    comment: "Believe you can and you're halfway there.",
    imageUrl: YimingWangPhoto,
  },
  {
    name1: 'Fei Fang',
    name2: '方霏',
    major: 'Radio Medicine',
    role: 'Experiment',
    comment: 'Traveling mountains and rivers, the world is worth it.',
    imageUrl: FeiFangPhoto,
  },
  {
    name1: 'Yunfan Yang',
    name2: '杨云帆',
    major: 'Radio Medicine',
    role: 'Team Leader & Video & Experiment',
    comment: 'Those who follow the light will eventually be radiant',
    imageUrl: YunfanYangPhoto,
  },
  {
    name1: 'Tian Luan',
    name2: '栾恬',
    major: 'Preventive Medicine',
    role: 'Graphic and Video Design',
    comment: 'Relentlessly pursue your goals, never ceasing to try.',
    imageUrl: TianLuanPhoto,
  },
  {
    name1: 'Mingshuo Li',
    name2: '李明朔',
    major: 'Preventive Medicine',
    role: 'Wiki & Writer & Experiment',
    comment: 'Stress comes from not taking action',
    imageUrl: MingshuoLiPhoto,
  },
];

export const team = {
  name: 'KRNM-SPH',
  members: teamMembers,
  description:
    'KRNM-SPH is a team of software engineers who are passionate about building software that makes a difference.',
  logo: 'https://via.placeholder.com/150',
};
