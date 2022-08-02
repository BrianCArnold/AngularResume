import { Applicant } from "../models/Applicant";

export const applicant: Applicant = {
  firstName: "Brian",
  lastName: "Arnold",
  middleNameOrInitial: "C.",
  address1: "86 Suydam St",
  address2: "Apt 1L",
  city: "Brooklyn",
  state: "NY",
  postalCode: "11221",
  phoneNumber: "256-652-6754",
  email: "connect@brian-arnold.dev",
  skillAreas: [
    {
      desc: "Frontend",
      skills: [
        {
          desc: "Angular",
          skillTags: ['angular', 'typescript' ],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Bootstrap",
          skillTags: ['css'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "RxJS",
          skillTags: ['typescript', 'angular' ],
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
          skillTags: ['dotnet'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "REST",
          skillTags: ['rest'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Entity Framework",
          skillTags: ['entityframework', 'sqlserver', 'dotnet'],
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
          skillTags: ['oracle'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Microsoft SQL Server",
          skillTags: ['sqlserver'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Cosmos DB",
          skillTags: ['nosql'],
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
          skillTags: ['azure', 'serverless', 'cloud'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Azure CDN",
          skillTags: ['serverless', 'azure', 'cloud'],
          detailLevel: 1,
          skills: []
        },
        {
          desc: "Azure DevOps",
          skillTags: ["devops", 'cicd', 'cloud'],
          detailLevel: 1,
          skills: []
        }
      ]
    }
  ]
}
