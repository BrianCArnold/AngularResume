import { Experience } from './Experience';
export class Job {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: Experience[];
  skills: Experience[];
}
