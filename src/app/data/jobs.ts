import { Job } from '../models/Job';

export const jobs: Job[] =
[
  {
    company: 'BNY Mellon',
    url: 'https://www.bnymellon.com/',
    title: 'Senior Specialist Engineer',
    location: 'New York, NY',
    startDate: 'April 2020',
    endDate: 'Current',
    detailLevel: 1,
    detailLevels: [1,2,4],
    achievements:[
			{
				desc: 'Managed internal NuGet packages for use in multiple projects',
				detailLevel: 2,
				skillTags: [],
				skills: [
					{
						desc: 'Custom .NET SQL Definition engine',
						details: [
							'Stored Procedures, SQL Types, and Table definitions were tracked in git as C# objects.',
							'This allowed developers to alter definitions of tables, stored procedures, and SQL types in C#, and have changes automatically deployed to Development databases at runtime, and deployed to Production and Testing environments as part of the same CI/CD pipelines that deploy C# and Angular.',
							'Differential comparisons were made to the Production and Testing databases nightly, and engineers responsible for their projects were notified of any discrepancies.',
							'Stored Procedure definitions included typed information on in/out parameters and result sets, ensuring compile time safety for all SQL calls.'
						],
						skillTags: [],
						detailLevel: 2
					},
					{
						desc: 'Centralized AD and SQL based Authentication',
						detailLevel: 2
					},
					{
						desc: 'Attribute based Dependency Injection system',
						details: [
							'Interfaces and Implementations are tagged with attributes to specify supported environments.',
							'Each implementation is added to Dependency Injection registry at runtime depending on supplied tags.',
							'Optional logging information provided at runtime to allow administrators to view which implementations are injected.'
						],
						detailLevel: 2
					}
				]
			},
      {
        desc: 'Constructed an upgradable Angular library for use in 6+ projects',
        skills: [
          {
            desc: 'Transparent JWT API authentication and invocation',
            details: [
              'This service provides direct simple access to Registered and Public Claim Names, as documented in RFC-7519 (4.1, 4.2).',
              'While this service provides protected methods to Private Claim Names, enabling inherited services to access these as necessary, it provides no public methods or properties for this purpose.',
              'This is due to the high likelihood of Private Claim Names collisions, which are inherently specific to individual applications.'
            ],
            detailLevel: 2
          },
          {
            desc: 'Optional upgrades for projects managed by Pipeline',
            details: [
              'Each project has separately managed build, publish, and deployment jobs specified in parallel stages.',
              'As each project requires testing before deployment to QA and UAT, the latest deployments are tracked separately in Git Tags as well as with GitLabs Deployment Environment tracking',
              'Each feature added to the universal application system is disabled by default, and only activated for applications as required',
              'This ensures that previously developed applications do not change presentation or behavior unless desired.',
              'As the universal application system matures, when additional features completed and added for future projects are desired in completed applications, these additional features can be enabled easily and safely.'
            ],
            detailLevel: 2
          },
          {
            desc: 'GoldenLayout Abstraction with Component Compositor',
            details: [
              'This system provides a component with configuration options in an Angular Routing Module that creates a GoldenLayout configuration.',
              'By specifying components in rows, columns, and tab groupings, panel layouts can be easily specified for each route.',
              'This allows developers to construct layouts declaritively without needing to interact with the GoldenLayout API.'
            ],
            skillTags: [
            ],
            detailLevel: 2
          }
        ],
        skillTags: [
          'angular',
          'typescript'
        ],
        detailLevel: 1
      },
      {
        desc: 'Proposed, implemented, and managed CI/CD Pipelines and Merge Requests',
        skills: [
          {
            desc: 'Unit Testing Gated Merge Requests',
            details: [
              'Continuous Integration was used to ensure that complete Unit Testing was performed on all Merge Requests prior to allowing branches to be merged into the master branch.',
              'In addition, integration testing was also performed following completion of unit testing.'
            ],
            detailLevel: 2
          },
          {
            desc:'Project and Maintaner Approval Requirements',
            details: [
              'Once all automated testing was completed, change approvals were required. This was managed by GitLab\'s Code Owners file.',
              'Changes to central library required the approval of one of the primary maintainers, who were responsible for ensuring that any requested changes did not affect the current expected default behavior of all components and services.',
              'Changes to individual projects required the approval of the project owner, along with an optional approval by one of the primary maintainers. This was to ensure that central library features were used as intended, and to check for potential edge cases.'
            ],
            detailLevel: 2,
          }
        ],
        skillTags: [
          'serverless',
          'architecture',
          'devops'
        ],
        detailLevel: 1
      }
    ],
    skills: [
      {
        desc: 'Angular',
        skillTag: 'angular',
        url: 'https://angular.io/',
        skills: [
          {
            desc: 'PrimeNG',
            url: 'https://www.primefaces.org/primeng/',
            detailLevel: 2
          },
          {
            desc: 'GoldenLayout',
            url: 'https://golden-layout.com/',
            detailLevel: 2
          },
          {
            desc: 'TypeScript',
            url: 'https://www.typescriptlang.org/',
            detailLevel: 2,
          },
        ],
        detailLevel: 1
      },
      {
        desc: 'SQL Server',
        skillTag: 'sqlserver',
        detailLevel: 1,
        url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
        skills: []
      },
      {
        desc: '.NET 5.0',
        skillTag: 'dotnet',
        detailLevel: 1,
        url: 'https://dotnet.microsoft.com/',
        skills: []
      },
      {
        desc: 'Dapper ORM',
        skillTag: 'entityframework',
        url: 'https://github.com/StackExchange/Dapper',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Docker',
        skillTag: 'serverless',
        detailLevel: 2,
        url: 'https://www.docker.com/',
        skills: []
      },
      {
        desc: 'Traefik',
        url: 'https://traefik.io/traefik/',
        skillTag: 'serverless',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'GitLab',
        skillTag: 'devops',
        detailLevel: 2,
        skills: []
      },
    ]
  },
  {
    company: 'Red Lobster LLC',
    url: 'https://www.redlobster.com/',
    title: 'Senior Systems Engineer',
    location: 'Orlando, FL',
    startDate: 'May 2018',
    endDate: 'March 2020',
    detailLevel: 1,
    detailLevels: [1,2,4],
    achievements: [
      {
        desc: 'Architected and developed multitier Azure application as Lead',
        details: [
          'Legacy application utilized ASP.NET 2.0 WebForms technology with a Lightspeed ORM repository front end for Oracle 11g.',
          'The replacement application utilized Angular 7 (later upgraded to Angular 8 and then 9) with Bootstrap styles.',
          'REST APIs were provided by ASP.NET MVC API Controllers.',
          'Entity Framework 6.1 was used initially, and later upgraded to Entity Framework 2.1.'
        ],
        skills: [
          {
            desc: 'Database agnostic Data Context implemented with EF Core 2.1',
            details: [
              'Originally written in Entity Framework 6.1 as Oracle had not yet released their Entity Framework Provider for Entity Framework Core.',
              'The interface was later re-implemented in Entity Framework Core 2.1 when Oracle released their Entity Framework Provider for Core.'
            ],
            skillTags: [
              'oracle',
              'dotnet',
              'entityframework'
            ],
            detailLevel: 2
          },
          {
            desc: 'Microservice-compatible Business Logic System',
            details: [
              'This ASP.NET MVC WebAPI tier was written with the ability to be optionally deployed in Azure Functions.',
              'Each WebAPI method defined also had a Azure Function method defined that will be deployed to Azure Functions when the application is deployed to Azure Serverless Architecture.'
            ],
            skillTags: [
              'dotnet',
              'rest',
              'serverless',
              'azure'
            ],
            detailLevel: 2
          },
          {
            desc: 'Dynamic Angular 9 site with context dependent display',
            details: [
              'The front end was originally written with Angular 7, but upgraded in place to 8 during development, and then later to 9 after initial deployment.',
              'While new features such as Ivy were unfortunately not able to be integrated into the site, upgrades were still regularly to ensure that any deprecated technology in use was identified and updated.'
            ],
            skillTags: [
              'angular',
              'typescript',
              'rest',
              'css'
            ],
            detailLevel: 2
          }
        ],
        skillTags: [
          'oracle',
          'dotnet',
          'entityframework',
          'rest',
          'serverless',
          'azure',
          'angular',
          'typescript',
          'css'
        ],
        detailLevel: 1
      },
      {
        desc: 'Created recursion serialization system for TypeScript',
        details: [
          'One of the major issues encountered in serializing complex relational data models is that referential loops can often result.',
          'In order to handle this eventuality, Newtonsoft Json.NET was configured to preserve object references. However, no acceptable effective technology was found to handle the same reference in TypeScript.',
          'To this end, any objects deserialized on the client were passed though a custom reference rebuilder that used the object references from Newtonsoft to reconstruct the same object graph that was present on the server before serialization.',
          'A related serializer was written to handle the process in reverse before posting object graphs back to the server.'
        ],
        skillTags:[
          'typescript',
          'rest'
        ],
        detailLevel: 2
      },
      {
        desc: 'Replaced flat file communication endpoints with modern APIs',
        details: [
          'All previous supply chain systems utilized CSV export and import for communication with other systems.',
          'In order to ensure that further modernization of other systems would not be limited to the capabilities of this the legacy system, each CSV import or export was reimplemented with a modern REST API, and the CSVs were processed or generated by an application that would read the data and POST the data to the REST API, or GET the data from the REST API and write the CSV.',
          'This ensured that older systems would continue to operate as expected with no modifications necessary, while newer applications could utilize REST for data transfer. Additionally, high throughput endpoints were also implemented with WebSockets.'
        ],
        skillTags:[
          'rest',
          'dotnet'
        ],
        detailLevel: 1
      },
      {
        desc: 'Configured DevOps CI/CD pipelines for separate tier deployment',
        details: [
          'In order to ensure regular and fault-resistent deployments of the application, Build and Release pipelines were implemented in Azure DevOps.',
          'Pull Requests were gated to require successful builds, successful deployment to a QA environment, and successful end-to-end and unit testing for each request.',
          'After all checks were completed, manual approval was required before final deployment to all production servers was completed.'
        ],
        skillTags:[
          'devops'
        ],
        detailLevel: 2
      },
      {
        desc: 'Utilized CI/CD pipelines to deploy bug fixes same-day',
        details: [
          'Due to the nature of the application and the high variability of business logic in place, the application was written to stratify business rules based on workflow, product properties, and supplier information.',
          'As changes to rules were handed down, the business rules were able to be quickly modified by navigating to the relevant section and modifying the logic.',
          'As the vast majority of application logic was present in this one aspect, this architecture allowed significant changes to the application to be tested and deployed very quickly.'
        ],
        skillTags:[
          'devops'
        ],
        detailLevel: 1
      }
    ],
    skills: [
      {
        desc: 'Angular',
        skillTag: 'angular',
        url: 'https://angular.io/',
        skills: [],
        detailLevel: 1,
      },
      {
        desc: 'Bootstrap 4.x',
        skillTag: 'css',
        url: 'https://getbootstrap.com/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: '.NET Core 2.1',
        skillTag: 'dotnet',
        detailLevel: 1,
        url: 'https://dotnet.microsoft.com/',
        skills: []
      },
      {
        desc: 'Oracle 18c',
        skillTag: 'oracle',
        detailLevel: 1,
        url: 'https://docs.oracle.com/en/database/oracle/oracle-database/18/',
        skills: []
      },
      {
        desc: 'TypeScript',
        skillTag: 'typescript',
        url: 'https://www.typescriptlang.org/',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Azure',
        url: 'https://azure.microsoft.com/en-us/',
        detailLevel: 2,
        skillTag: 'serverless',
        skills: [
          {
            desc: 'Functions',
            detailLevel: 2,
            url: 'https://azure.microsoft.com/en-us/services/functions/',
          },
          {
            desc: 'SQL',
            detailLevel: 3,
            url: 'https://azure.microsoft.com/en-us/products/azure-sql/database/',
          },
          {
            desc: 'CDN',
            url: 'https://azure.microsoft.com/en-us/services/cdn/',
            detailLevel: 3,
          },
          {
            desc: 'DevOps',
            url: 'https://azure.microsoft.com/en-us/services/devops/',
            detailLevel: 3
          },
          {
            desc: 'Pipelines',
            detailLevel: 2,
            url: 'https://azure.microsoft.com/en-us/services/devops/pipelines/'
          }
        ]
      }
    ]
  },
  {
    company: 'Acme AtronOmatic LLC',
    url: 'https://www.acmeaom.com/',
    title: 'Senior Software Engineer',
    location: 'Orlando, FL',
    startDate: 'Aug 2014',
    endDate: 'Apr 2018',
    detailLevel: 1,
    detailLevels: [1,2],
    achievements: [
      {
        desc: 'Designed replacement message processing architecture',
        skillTags:[
          'flight',
          'entityframework',
          'dotnet'
        ],
        detailLevel: 1
      },
      {
        desc: 'Updated ASMX web services to WebAPI',
        skillTags:[
          'rest',
          'mvc',
          'dotnet'
        ],
        detailLevel: 1
      },
      {
        desc: 'Created a Cosmos DB persisted flight status in-memory cache',
        skillTags:[
          'nosql',
          'azure'
        ],
        detailLevel: 2
      },
      {
        desc: 'Managed network architecture for hybrid cloud environment',
        skillTags:[
          'architecture'
        ],
        detailLevel: 2
      },
      {
        desc: 'Developed server management applications in WPF',
        skillTags:[
          'dotnet',
          'entityframework',
          'sqlserver'
        ],
        detailLevel: 2
      }
    ],
    skills: [
      {
        desc: 'ASP.NET' ,
        skillTag: 'mvc',
        detailLevel: 1,
        skills: []
      },
      {
        desc: '.NET 4.6.1' ,
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Azure SQL' ,
        skillTag: 'sqlserver',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'REST' ,
        skillTag: 'rest',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Redis',
        skillTag: 'nosql',
        url: 'https://redis.io/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'CosmosDB',
        skillTag: 'nosql',
        url: 'https://azure.microsoft.com/en-us/services/cosmos-db/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'ASDI' ,
        skillTag: 'flight',
        url: 'https://www.fly.faa.gov/ASDI/asdi.html',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'FLTD/SWIM',
        skillTag: 'flight',
        url: 'https://www.faa.gov/air_traffic/technology/swim/overview/',
        detailLevel: 2,
        skills: []
      },
    ]
  },
  {
    company: 'Hunt Engineering Services, Inc.',
    url: 'http://huntinc.com/home.aspx',
    title: 'Senior Software Engineer',
    location: 'Orlando, FL',
    startDate: 'Nov 2011',
    endDate: 'Aug 2014',
    detailLevel: 1,
    detailLevels: [1,2],
    achievements: [
      {
        desc: 'Collaboration with Software Development VP for architecture design',
        skillTags:[
          'architecture',
          'dotnet',
          'mvc',
          'entityframework',
          'sqlserver',
          'sharepoint',
          'azure',
          'oracle',
          'rest'
        ],
        detailLevel: 2
      },
      {
        desc: 'Implemented and maintained visitor management for military bases',
        skillTags:[
          'oracle'
        ],
        detailLevel: 1
      },
      {
        desc: 'Designed and implemented REST interfaces for existing SOAP APIs',
        skillTags:[
          'rest'
        ],
        detailLevel: 2
      },
      {
        desc: 'Designed and implemented SharePoint solution frontend for Oracle data',
        skillTags:[
          'sharepoint'
        ],
        detailLevel: 2
      },
      {
        desc: 'Developed WPF application to interface biometric devices with website',
        skillTags:[
          'dotnet'
        ],
        detailLevel: 2
      }
    ],
    skills: [
      {
        desc: 'C#/VB.NET' ,
        skillTag: 'dotnet',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'ASP.NET 4.5.1' ,
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'MVC 5' ,
        skillTag: 'mvc',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'EF 6' ,
        skillTag: 'entityframework',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SQL Server 2014 ' ,
        skillTag: 'sqlserver',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2013' ,
        skillTag: 'sharepoint',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Microsoft Azure' ,
        skillTag: 'azure',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'WPF' ,
        skillTag: 'dotnet',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'Oracle 11g' ,
        skillTag: 'oracle',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'PL/SQL' ,
        skillTag: 'oracle',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'Toad (Oracle)',
        skillTag: 'oracle',
        url: 'https://www.quest.com/products/toad-for-oracle/',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'REST',
        skillTag: 'rest',
        detailLevel: 3,
        skills: []
      }
    ]
  },
  {
    company: 'GROWMARK, Inc.',
    url: 'https://www.growmark.com/',
    title: 'Contractor',
    location: 'Bloomington, IL',
    startDate: 'Oct 2010',
    endDate: 'Oct 2011',
    detailLevel: 1,
    detailLevels: [1,2],
    achievements: [
      {
        desc: 'Implemented WebNow and ImageNow forms with XML, XSLT, and iScript.',
        skillTags:[],
        detailLevel: 1
      },
      {
        desc: 'Created image file processors to catalog file metadata on upload.',
        skillTags:[],
        detailLevel: 2
      },
      {
        desc: 'Created SharePoint Features to provide provisionable capabilities.',
        detailLevel: 2,
        skillTags: ['sharepoint']
      }
    ],
    skills: [
      {
        desc: 'C#/F#',
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'ASP.NET 4.0' ,
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2010' ,
        skillTag: 'sharepoint',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'ImageNow',
        skillTag: 'web',
        url: 'https://www.hyland.com/en/platform/product-suite/perceptive-content',
        detailLevel: 1,
        skills: []
      },
    ]
  },
  {
    company: 'BAE Systems Inc.',
    url: 'https://www.baesystems.com/',
    title: 'Contractor',
    location: 'Huntsville, AL',
    startDate: 'Dec 2007',
    endDate: 'Oct 2010',
    detailLevel: 1,
    detailLevels: [1,2,4],
    achievements: [
      {
        desc: 'Created customized SharePoint workflows for Contract bidding',
        details: [
          'Implemented a menu based replacement for the standard SharePoint Top Link Bar, allowing for hierarchical structure, AJAX calls to populate the menu on the fly, and SharePoint permission integration for managing menu item visibility.',
          'Designed system used to track all aspects of a contract lifecycle, including proposal operation, task order management, and subcontractor communication and reporting. The system includes automated data call management, providing structure, status reporting, and document storage, simplifying an manual process.',
          'Developed SharePoint Features to provision SharePoint sites, and automatically provisioned to sites created by workflow',
        ],
        skillTags:[],
        detailLevel: 1
      },
      {
        desc: 'Created a dynamic header image generator.',
        skillTags:[],
        detailLevel: 2
      },
    ],
    skills: [
      {
        desc: 'C#',
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2007',
        skillTag: 'sharepoint',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'ASP.NET 3.5',
        skillTag: 'dotnet',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SOAP',
        skillTag: 'web',
        detailLevel: 2,
        skills: []
      }
    ]
  }
]
