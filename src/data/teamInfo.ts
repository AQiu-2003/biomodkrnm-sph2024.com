import FeiFangPhoto from './teamMemberPhotos/Fei Fang.jpg';
import YimingWangPhoto from './teamMemberPhotos/Yiming Wang.jpg';
import TianLuanPhoto from './teamMemberPhotos/Tian Luan.jpg';
import YunfanYangPhoto from './teamMemberPhotos/Yunfan Yang.jpg';
import LiYunzePhoto from './teamMemberPhotos/Li Yunze.jpg';
import PeichenXiePhoto from './teamMemberPhotos/Peichen Xie.jpg';
import MingshuoLiPhoto from './teamMemberPhotos/Mingshuo Li.jpg';
import WeiKongPhoto from './teamMemberPhotos/Wei Kong.jpg';
import { StaticImageData } from 'next/image';

export interface TeamMember {
  name1: string; // main name to display
  name2?: string; // may be english name or nickname
  major: string;
  role: string;
  comment: string;
  email: string;
  phone: string;
  imageUrl: StaticImageData | string;
}

export const teamMembers: TeamMember[] = [
  {
    name1: 'Fei Fang',
    name2: '方霏',
    major: 'Radio Medicine',
    role: 'Experiment',
    comment: 'Traveling mountains and rivers, the world is worth it.',
    email: 'fangfei2723@mails.jlu.edu.cn',
    phone: '15590669291',
    imageUrl: FeiFangPhoto,
  },
  {
    name1: 'Yiming Wang',
    name2: '汪一鸣',
    major: 'Preventive Medicine',
    role: 'Wiki & Writer & Experiment',
    comment: "Believe you can and you're halfway there.",
    email: '281065999@qq.com',
    phone: '15737148138',
    imageUrl: YimingWangPhoto,
  },
  {
    name1: 'Tian Luan',
    name2: '栾恬',
    major: 'Preventive Medicine',
    role: 'Graphic and Video Design',
    comment: 'Relentlessly pursue your goals, never ceasing to try.',
    email: '457486379@qq.com',
    phone: '15504490317',
    imageUrl: TianLuanPhoto,
  },
  {
    name1: 'Yunfan Yang',
    name2: '杨云帆',
    major: 'Radio Medicine',
    role: 'Team Leader & Video & Experiment',
    comment: 'Those who follow the light will eventually be radiant',
    email: 'yangyr2722@mails.jlu.edu.cn',
    phone: '13894028798',
    imageUrl: YunfanYangPhoto,
  },
  {
    name1: 'Yunze Li',
    name2: '李昀泽',
    major: 'Radiation Medicine',
    role: 'Experimental',
    comment: 'I like listening to music and sleeping. I hope I can make good friends during this competition trip.',
    email: '3561327117@qq.com',
    phone: '18186890547',
    imageUrl: LiYunzePhoto,
  },
  {
    name1: 'Peichen Xie',
    name2: '谢沛辰',
    major: 'Radiation Medicine',
    role: 'Experimental',
    comment: 'Anxiety is the dizziness of freedom',
    email: '3501647044@qq.com',
    phone: '15104419393',
    imageUrl: PeichenXiePhoto,
  },
  {
    name1: 'Mingshuo Li',
    name2: '李明朔',
    major: 'Preventive Medicine',
    role: 'Wiki & Writer & Experiment',
    comment: 'Stress comes from not taking action',
    email: '2965247173@qq.com',
    phone: '17767787988',
    imageUrl: MingshuoLiPhoto,
  },
  {
    name1: 'Wei Kong',
    name2: '孔玮',
    major: 'Preventive Medicine',
    role: 'Experimental',
    comment: 'Full of hope, one will be invincible',
    email: '743074136@qq.com',
    phone: '18706332133',
    imageUrl: WeiKongPhoto,
  },
];

export const team = {
  name: 'KRNM-SPH',
  members: teamMembers,
  description:
    'KRNM-SPH is a team of software engineers who are passionate about building software that makes a difference.',
  logo: 'https://via.placeholder.com/150',
};
