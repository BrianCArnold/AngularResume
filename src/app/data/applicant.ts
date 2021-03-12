import { Applicant } from "../models/Applicant";

export const applicant: Applicant = {
  firstName: "Brian",
  lastName: "Arnold",
  middleNameOrInitial: "C.",
  address1: "615 1st Ave",
  address2: "Apt 1011",
  city: "Pittsburgh",
  state: "PA",
  postalCode: "15219",
  phoneNumber: "256-652-6754",
  email: "connect@brian-arnold.dev",
  skillAreas: [
    {
      desc: "Frontend",
      skills: [
        {
          desc: "Angular",
          skillTag: 'angular'
        },
        {
          desc: "Bootstrap",
          skillTag: 'css'
        },
        {
          desc: "RxJS",
          skillTag: 'typescript'
        }
      ]
    },
    {
      desc: "Backend",
      skills: [
        {
          desc: "C#",
          skillTag: 'dotnet'
        },
        {
          desc: "REST",
          skillTag: 'rest'
        },
        {
          desc: "Entity Framework",
          skillTag: 'entityframework'
        }
      ]
    },
    {
      desc: "Database",
      skills: [
        {
          desc: "Oracle 18c",
          skillTag: 'oracle'
        },
        {
          desc: "Microsoft SQL Server",
          skillTag: 'sqlserver'
        },
        {
          desc: "Cosmos DB",
          skillTag: 'nosql'
        }
      ]
    },
    {
      desc: "Cloud",
      skills: [
        {
          desc: "Azure Functions",
          skillTag: 'azure'
        },
        {
          desc: "Azure CDN",
          skillTag: 'serverless'
        },
        {
          desc: "Azure DevOps",
          skillTag: "devops"
        }
      ]
    }
  ]
}
