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
  name1: string;
  name2?: string;
  major: string;
  role: string[];
  comment: string;
  email: string;
  imageUrl: StaticImageData | string;
}

export const teamMembers: TeamMember[] = [
  {
    name1: 'Yunfan Yang',
    name2: '杨云帆',
    major: 'Radio Medicine',
    role: ['Team Leader', 'Video', 'Experiment'],
    comment: 'Those who follow the light will eventually be radiant',
    email: 'yangyf2722@mails.jlu.edu.cn',
    imageUrl: YunfanYangPhoto,
  },
  {
    name1: 'Fei Fang',
    name2: '方霏',
    major: 'Radio Medicine',
    role: ['Experiment'],
    comment: 'Traveling mountains and rivers, the world is worth it.',
    email: 'fangfei2723@mails.jlu.edu.cn',
    imageUrl: FeiFangPhoto,
  },
  {
    name1: 'Yiming Wang',
    name2: '汪一鸣',
    major: 'Preventive Medicine',
    role: ['Wiki', 'Writer', 'Experiment'],
    comment: "Believe you can and you're halfway there.",
    email: '281065999@qq.com',
    imageUrl: YimingWangPhoto,
  },
  {
    name1: 'Tian Luan',
    name2: '栾恬',
    major: 'Preventive Medicine',
    role: ['Graphic', 'Video', 'Design'],
    comment: 'Relentlessly pursue your goals, never ceasing to try.',
    email: '457486379@qq.com',
    imageUrl: TianLuanPhoto,
  },

  {
    name1: 'Yunze Li',
    name2: '李昀泽',
    major: 'Radiation Medicine',
    role: ['Experiment'],
    comment:
      'I like listening to music and sleeping. I hope I can make good friends during this competition trip.',
    email: '3561327117@qq.com',
    imageUrl: LiYunzePhoto,
  },
  {
    name1: 'Peichen Xie',
    name2: '谢沛辰',
    major: 'Radiation Medicine',
    role: ['Experiment'],
    comment: 'Anxiety is the dizziness of freedom',
    email: '3501647044@qq.com',
    imageUrl: PeichenXiePhoto,
  },
  {
    name1: 'Mingshuo Li',
    name2: '李明朔',
    major: 'Preventive Medicine',
    role: ['Wiki', 'Writer', 'Experiment'],
    comment: 'Stress comes from not taking action',
    email: '2965247173@qq.com',
    imageUrl: MingshuoLiPhoto,
  },
  {
    name1: 'Wei Kong',
    name2: '孔玮',
    major: 'Preventive Medicine',
    role: ['Experiment'],
    comment: 'Full of hope, one will be invincible',
    email: '743074136@qq.com',
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
