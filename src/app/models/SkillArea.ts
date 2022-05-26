import { Skill } from "./Skill";

export interface SkillArea {
  desc: string;
  details?: string[];
  skills?: Skill[];
}
