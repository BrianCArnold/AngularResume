import { DetailLevel, Achievement } from './Experience';
import { Skill } from './Skill';
export interface Job {
  company: string;
  url: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  detailLevel: DetailLevel;
  detailLevels: DetailLevel[];
  achievements: Achievement[];
  skills: Skill[];
}
