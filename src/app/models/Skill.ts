import { DetailLevel } from "./Experience";
import { SkillTag } from "./SkillTag";

export interface Skill {
  desc: string;
  skills: Skill[];
  // details?: string[];
  skillTags: SkillTag[];
  url?: string;
  detailLevel: DetailLevel;
}
