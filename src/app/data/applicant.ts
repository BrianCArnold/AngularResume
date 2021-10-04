import { Applicant } from "../models/Applicant";

export const applicant: Applicant = {
  firstName: "Brian",
  lastName: "Arnold",
  middleNameOrInitial: "C.",
  address1: "88 Rogers Ave",
  address2: "Apt 2",
  city: "Brooklyn",
  state: "NY",
  postalCode: "11216",
  phoneNumber: "256-652-6754",
  email: "connect@brian-arnold.dev",
  skillAreas: [
    {
      desc: "Frontend",
      skills: [
        {
          desc: "Angular",
          skillTag: 'angular',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Bootstrap",
          skillTag: 'css',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "RxJS",
          skillTag: 'typescript',
          detailLevel: 1,
        skills: []
        }
      ]
    },
    {
      desc: "Backend",
      skills: [
        {
          desc: "C#",
          skillTag: 'dotnet',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "REST",
          skillTag: 'rest',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Entity Framework",
          skillTag: 'entityframework',
          detailLevel: 1,
        skills: []
        }
      ]
    },
    {
      desc: "Database",
      skills: [
        {
          desc: "Oracle 18c",
          skillTag: 'oracle',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Microsoft SQL Server",
          skillTag: 'sqlserver',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Cosmos DB",
          skillTag: 'nosql',
          detailLevel: 1,
        skills: []
        }
      ]
    },
    {
      desc: "Cloud",
      skills: [
        {
          desc: "Azure Functions",
          skillTag: 'azure',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Azure CDN",
          skillTag: 'serverless',
          detailLevel: 1,
        skills: []
        },
        {
          desc: "Azure DevOps",
          skillTag: "devops",
          detailLevel: 1,
        skills: []
        }
      ]
    }
  ]
}
