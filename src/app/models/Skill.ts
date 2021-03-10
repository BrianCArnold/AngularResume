import { SkillTag } from "./SkillTag";

export class Skill {
  desc: string;
  skills?: SubSkill[];
  details?: string[];
  skillTag: SkillTag;
}

export class SubSkill {
  desc: string;

}
