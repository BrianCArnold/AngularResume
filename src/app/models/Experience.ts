import { SubAchievement } from "./JobSkill";
import { SkillTag } from "./SkillTag";

export type DetailLevel = -1|1|2|3|4;

export interface Achievement {
  desc: string;
  details?: string[];
  skills?: SubAchievement[];
  skillTags: SkillTag[];
  detailLevel: DetailLevel;
}


