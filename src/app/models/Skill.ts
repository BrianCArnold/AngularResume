import { SkillTag } from "./SkillTag";

export class Skill {
  desc: string;
  skills?: SubSkill[];
  details?: string[];
  skillTag: SkillTag;
  url?: string;
}

export class SubSkill {
  desc: string;
  url?: string;
}
