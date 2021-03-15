import { DetailLevel } from "./Experience";
import { SkillTag } from "./SkillTag";

export class Skill {
  desc: string;
  skills: SubSkill[];
  details?: string[];
  skillTag: SkillTag;
  url?: string;
  detailLevel: DetailLevel;
}

export class SubSkill {
  desc: string;
  url?: string;
  detailLevel: DetailLevel;
}
