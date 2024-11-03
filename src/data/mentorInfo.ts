import { StaticImageData } from 'next/image';

// 导入导师照片
import ZhichengWangPhoto from './mentorPhotos/Zhicheng Wang.jpg';
import YannanShenPhoto from './mentorPhotos/Yannan Shen.jpg';
import HuanHePhoto from './mentorPhotos/Huan He.jpg';
import YunyunChengPhoto from './mentorPhotos/Yunyun Cheng.jpg';
import GuofanSuPhoto from './mentorPhotos/Guofan Su.jpg';
import HexuanLengPhoto from './mentorPhotos/Hexuan Leng.jpg';
import JunxuanYiPhoto from './mentorPhotos/Junxuan Yi.jpg';

export interface Mentor {
  name1: string;
  name2?: string;
  title: string;
  department: string;
  imageUrl: StaticImageData;
  email?: string;
  type: 'professor' | 'senior'; // 添加类型字段
}

export const professors: Mentor[] = [
  {
    name1: 'Zhicheng Wang',
    name2: '王志成',
    title: 'Professor',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: ZhichengWangPhoto,
    type: 'professor',
  },
  {
    name1: 'Yannan Shen',
    name2: '申延男',
    title: 'Associate Professor',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: YannanShenPhoto,
    type: 'professor',
  },
  {
    name1: 'Huan He',
    name2: '何欢',
    title: 'Associate Professor',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: HuanHePhoto,
    type: 'professor',
  },
  {
    name1: 'Yunyun Cheng',
    name2: '程云云',
    title: 'Lecturer',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: YunyunChengPhoto,
    type: 'professor',
  },
  {
    name1: 'Guofan Su',
    name2: '苏国范',
    title: 'Associate Professor',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: GuofanSuPhoto,
    type: 'professor',
  },
  {
    name1: 'Hexuan Leng',
    name2: '冷贺璇',
    title: 'Lecturer',
    department: 'NHC Key Laboratory of Radiobiology',
    imageUrl: HexuanLengPhoto,
    type: 'professor',
  },
];

export const seniors: Mentor[] = [
  {
    name1: 'Junxuan Yi',
    name2: '衣峻萱',
    title: 'Postdoc',
    department:
      'Southern Medical University, NHC Key Laboratory of Radiobiology',
    imageUrl: JunxuanYiPhoto,
    type: 'senior',
  },
];

export const mentors = [...professors, ...seniors];

export const mentorGroup = {
  professors,
  seniors,
  department: 'NHC Key Laboratory of Radiobiology',
};
