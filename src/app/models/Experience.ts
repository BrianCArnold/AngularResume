import { SubAchievement } from "./JobSkill";
import { SkillTag } from "./SkillTag";

export type DetailLevel = 1|2|3;

export class Achievement {
  desc: string;
  details?: string[];
  skills?: SubAchievement[];
  skillTags: SkillTag[];
  detailLevel: DetailLevel;
}


