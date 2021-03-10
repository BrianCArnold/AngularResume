import { Experience } from './Experience';
import { Skill } from './Skill';
export class Job {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: Experience[];
  skills: Skill[];
}
