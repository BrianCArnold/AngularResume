import { SkillArea } from "./SkillArea";

export class Applicant {
  firstName: string;
  lastName: string;
  middleNameOrInitial: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  skillAreas: SkillArea[];
}
