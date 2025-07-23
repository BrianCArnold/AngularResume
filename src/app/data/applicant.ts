import { Applicant } from "../models/Applicant";

export const applicant: Applicant = {
  firstName: "Caela",
  lastName: "Scott",
  middleNameOrInitial: "",
  address1: "",
  address2: "",
  city: "Brooklyn",
  state: "NY",
  postalCode: "",
  phoneNumber: "(626) 354-4898",
  email: "@HELLHOUNDATTACK",
  skillAreas: [
    {
      desc: "Bartending Knowledge",
      skills: [
        {
          desc: "Beer and Wine",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Liquor and Craft Cocktails",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Opening/Closing Bar and Register",
          skillTags: ['css'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Managing Cash, Charge, Float, and Till",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
      ]
    },
    {
      desc: "Management",
      skills: [
        {
          desc: "Lead Bartender and Staff Management",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Exudes confidence and Proficiency",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Daily Stock Control",
          skillTags: [],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Weekly Stockroom Audits",
          skillTags: [],
          detailLevel: 1,
          skills: []
        }
      ]
    },
    {
      desc: "Interpersonal Skills",
      skills: [
        {
          desc: "Customer Service Focused",
          skillTags: ['oracle'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Clear Communication Style",
          skillTags: ['sqlserver'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Builds strong work relationships",
          skillTags: ['nosql'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Friendly and Inviting",
          skillTags: ['nosql'],
          detailLevel: 1,
          skills: []
        },
      ]
    },
    {
      desc: "POS Systems",
      skills: [
        {
          desc: "Aloha POSitouch",
          skillTags: ['oracle'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Revel",
          skillTags: ['sqlserver'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Square",
          skillTags: ['nosql'],
          detailLevel: 1,
          skills: []
        },
      ]
    },
  ]
}
