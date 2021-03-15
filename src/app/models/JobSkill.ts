import { DetailLevel } from "./Experience";
import { SkillTag } from "./SkillTag";


export class SubAchievement {
  desc: string;
  details?: string[];
  skillTags?: SkillTag[];
  detailLevel: DetailLevel;
}
