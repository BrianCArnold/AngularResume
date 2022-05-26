import { DetailLevel } from "./Experience";
import { SkillTag } from "./SkillTag";


export interface SubAchievement {
  desc: string;
  details?: string[];
  skills?: SubAchievement[];
  skillTags: SkillTag[];
  detailLevel: DetailLevel;
}
