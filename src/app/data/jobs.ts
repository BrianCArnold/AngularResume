import { Job } from '../models/Job';

export const jobs: Job[] =
[
  {
    company: 'BNY Mellon',
    url: 'https://www.bnymellon.com/',
    title: 'Principal / Senior Specialist Engineer',
    location: 'New York, NY',
    startDate: 'April 2020',
    endDate: 'Current',
    detailLevel: 1,
    detailLevels: [1,2,4],
    achievements:[
			{
				desc: 'Managed shared internal NuGet packages for use in multiple projects',
				detailLevel: 2,
				skillTags: ['dotnet', 'cicd'],
				skills: [
					{
						desc: 'Custom .NET SQL Definition engine',
						details: [
							'Stored Procedures, SQL Types, and Table definitions were tracked in git as C# objects.',
							'This allowed developers to alter definitions of tables, stored procedures, and SQL types in C#, and have changes automatically deployed to Development databases at runtime, and deployed to Production and Testing environments as part of the same CI/CD pipelines that deploy C# and Angular.',
							'Differential comparisons were made to the Production and Testing databases nightly, and engineers responsible for their projects were notified of any discrepancies.',
							'Stored Procedure definitions included typed information on in/out parameters and result sets, ensuring compile time safety for all SQL calls.'
						],
						skillTags: ['sqlserver', 'cicd', 'dotnet', 'containers', 'entityframework'],
						detailLevel: 2
					},
					{
						desc: 'Centralized AD and SQL based Authentication',
						detailLevel: 2,
						skillTags: ['sqlserver', 'cicd', 'dotnet'],
					},
					{
						desc: 'Attribute based Dependency Injection system',
						details: [
							'Interfaces and Implementations are tagged with attributes to specify supported environments.',
							'Each implementation is added to Dependency Injection registry at runtime depending on supplied tags.',
							'Optional logging information provided at runtime to allow administrators to view which implementations are injected.'
						],
						skillTags: ['cicd', 'dotnet'],
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
						skillTags: [
              'angular',
              'typescript'
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
						skillTags: [
              'angular',
              'cicd',
              'containers',
              'css'
            ],
            detailLevel: 2
          },
          {
            desc: 'GoldenLayout Abstraction with Component Compositor',
            details: [
              'This system provides a component with configuration options in an Angular Routing Module that creates a GoldenLayout configuration.',
              'By specifying components in rows, columns, and tab groupings, panel layouts can be easily specified for each route.',
              'This allows developers to construct layouts declaratively without needing to interact with the GoldenLayout API.'
            ],
            skillTags: [
              'angular',
              'cicd',
              'css'
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
        desc: 'Proposed, implemented, and managed CI/CD Pipelines and Pull Requests',
        skills: [
          {
            desc: 'Unit Testing Gated Pull Requests',
            details: [
              'Continuous Integration was used to ensure that complete Unit Testing was performed on all Pull Requests prior to allowing branches to be merged into the master branch.',
              'In addition, integration testing was also performed following completion of unit testing.'
            ],
						skillTags: [
              'cicd',
              'devops',
              'rest'
            ],
            detailLevel: 2
          },
          {
            desc:'Required Project and Maintaner Approval',
            details: [
              'Once all automated testing was completed, change approvals were required. This was managed by GitLab\'s Code Owners file.',
              'Changes to central library required the approval of one of the primary maintainers, who were responsible for ensuring that any requested changes did not affect the current expected default behavior of all components and services.',
              'Changes to individual projects required the approval of the project owner, along with an optional approval by one of the primary maintainers. This was to ensure that central library features were used as intended, and to check for potential edge cases.'
            ],
						skillTags: [
              'cicd',
              'devops'
            ],
            detailLevel: 2,
          },
          {
            desc: 'Managed Pull Requests for new library features and improvements',
            detailLevel: 2,
            skillTags: [
              'cicd',
              'devops'
            ],
            details: [
              'I worked with developers to encourage developing reusable features for inclusion in libraries, rather than develop highly similar features multiple times for each project.',
              'I also identified replicated code in multiple projects and moved those features to the central library repository for Angular and .NET.'
            ]
          },
          {
            desc: 'Reviewed proposed code for anti-patterns and areas of improvement',
            skillTags: [
              'cicd',
              'devops'
            ],
            detailLevel: 2,
            details: [
              'I identified and educated developers on coding patterns that obscured errors which would normally be caught by the compiler.',
              'I also enabled and configured several linting tools which provided feedback on code quality.',
              'Several Roslyn Code Analysis Warnings were upgraded to Errors, and the codebase was reviewed for any remaining anti-patterns.'
            ]
          },
          {
            desc: 'Mentored developers on improved development approaches',
            skillTags: [
              'cicd',
              'devops'
            ],
            detailLevel: 2,
            details: [
              'I educated developers on best practices,',
              'which anti-patterns were affecting their code quality,',
              'and educated them on the underlying theory of patterns and anti-patterns.'
            ]
          },
        ],
        skillTags: [
          'serverless',
          'devops'
        ],
        detailLevel: 1
      },
    ],
    skills: [
      {
        desc: 'Angular',
        skillTags: ['angular', 'typescript', 'css'],
        url: 'https://angular.io/',
        skills: [
          {
            desc: 'PrimeNG',
            skillTags: ['angular', 'typescript', 'css'],
            url: 'https://www.primefaces.org/primeng/',
            detailLevel: 2,
            skills:[]
          },
          {
            desc: 'GoldenLayout',
            skillTags: ['angular', 'typescript', 'css'],
            url: 'https://golden-layout.com/',
            detailLevel: 2,
            skills:[]
          },
          {
            desc: 'TypeScript',
            url: 'https://www.typescriptlang.org/',
            skillTags: ['typescript'],
            detailLevel: 2,
            skills: []
          },
        ],
        detailLevel: 1
      },
      {
        desc: 'Sass/SCSS',
        detailLevel: 2,
        skillTags: ['css'],
        url: 'https://sass-lang.com/',
        skills:[],
      },
      {
        desc: 'SQL Server',
        skillTags: ['sqlserver'],
        detailLevel: 1,
        url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
        skills: []
      },
      {
        desc: '.NET 5.0',
        skillTags: ['dotnet'],
        detailLevel: 1,
        url: 'https://dotnet.microsoft.com/',
        skills: []
      },
      {
        desc: 'Dapper ORM',
        skillTags: ['entityframework', 'sqlserver'],
        url: 'https://github.com/StackExchange/Dapper',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Docker',
        skillTags: ['serverless', 'containers'],
        detailLevel: 2,
        url: 'https://www.docker.com/',
        skills: []
      },
      {
        desc: 'Traefik',
        url: 'https://traefik.io/traefik/',
        skillTags: ['containers'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'GitLab',
        skillTags: ['devops', 'cicd'],
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
          'typescript'
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
        desc: 'Configured DevOps pipelines for tiered and same-day hotfix deployment',
        details: [
          'In order to ensure regular and fault-resistent deployments of the application, Build and Release pipelines were implemented in Azure DevOps.',
          'Pull Requests were gated to require successful builds, successful deployment to a QA environment, and successful end-to-end and unit testing for each request.',
          'After all checks were completed, manual approval was required before final deployment to all production servers was completed.',
          'Due to the nature of the application and the high variability of business logic in place, the application was written to stratify business rules based on workflow, product properties, and supplier information.',
          'As changes to rules were handed down, the business rules were able to be quickly modified by navigating to the relevant section and modifying the logic.',
          'As the vast majority of application logic was present in this one aspect, this architecture allowed significant changes to the application to be tested and deployed very quickly.'
        ],
        skillTags:[
          'cicd',
          'devops',
          'azure'
        ],
        detailLevel: 2
      },
    ],
    skills: [
      {
        desc: 'Angular',
        skillTags: ['angular', 'typescript'],
        url: 'https://angular.io/',
        skills: [],
        detailLevel: 1,
      },
      {
        desc: 'Bootstrap 4.x',
        skillTags: ['css'],
        url: 'https://getbootstrap.com/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'Sass/SCSS',
        skillTags: ['css'],
        url: 'https://sass-lang.com/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: '.NET Core 2.1',
        skillTags: ['dotnet', 'rest'],
        detailLevel: 1,
        url: 'https://dotnet.microsoft.com/',
        skills: []
      },
      {
        desc: 'EF Core 2.1',
        skillTags: ['entityframework'],
        detailLevel: 1,
        url: 'https://github.com/dotnet/efcore',
        skills: []
      },
      {
        desc: 'Oracle 18c',
        skillTags: ['oracle'],
        detailLevel: 1,
        url: 'https://docs.oracle.com/en/database/oracle/oracle-database/18/',
        skills: []
      },
      {
        desc: 'TypeScript',
        skillTags: ['typescript'],
        url: 'https://www.typescriptlang.org/',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Azure',
        url: 'https://azure.microsoft.com/en-us/',
        detailLevel: 2,
        skillTags: ['serverless', 'azure', 'devops', 'cicd' ],
        skills: [
          {
            desc: 'Functions',
            detailLevel: 2,
            url: 'https://azure.microsoft.com/en-us/services/functions/',
            skillTags: [ 'azure', 'serverless'],
            skills: []
          },
          {
            desc: 'CDN',
            url: 'https://azure.microsoft.com/en-us/services/cdn/',
            detailLevel: 3,
            skillTags: ['azure'],
            skills: []
          },
          {
            desc: 'DevOps',
            url: 'https://azure.microsoft.com/en-us/services/devops/',
            detailLevel: 3,
            skillTags: ['devops', 'cicd'],
            skills: []
          },
          {
            desc: 'Pipelines',
            detailLevel: 2,
            url: 'https://azure.microsoft.com/en-us/services/devops/pipelines/',
            skillTags: ['cicd', 'devops', 'azure'],
            skills: []
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
          'cloud'
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
      },
      {
        desc: 'Ported legacy ASP application to ASP.NET',
        skillTags: ['dotnet', 'entityframework', 'flight', 'mvc', 'sqlserver', 'typescript'],
        detailLevel: 2,
      },
      {
        desc: 'Created extensions to automatically generate context menus',
        detailLevel: 2,
        skillTags: ['css', 'typescript', 'dotnet']
      },
      {
        desc: 'Automated deployment process for Web Application and Services',
        detailLevel: 3,
        skillTags: ['dotnet', 'cicd', 'sqlserver', 'devops']
      }
    ],
    skills: [
      {
        desc: 'ASP.NET' ,
        skillTags: ['mvc', 'dotnet', 'rest'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'TFS',
        skillTags: ['cicd', 'devops'],
        detailLevel: 3,
        skills:[]

      },
      {
        desc: '.NET 4.6.1' ,
        skillTags: ['dotnet'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Azure SQL' ,
        skillTags: ['sqlserver', 'cloud', 'azure'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'EF 6' ,
        skillTags: ['entityframework'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'REST' ,
        skillTags: ['rest', 'dotnet'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'CSS',
        skillTags: ['css'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'jQuery',
        skillTags: ['typescript'],
        url: 'https://jquery.com/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'Redis',
        skillTags: ['nosql', 'azure', 'cloud'],
        url: 'https://redis.io/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'CosmosDB',
        skillTags: ['nosql', 'azure', 'cloud'],
        url: 'https://azure.microsoft.com/en-us/services/cosmos-db/',
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'ASDI' ,
        skillTags: ['flight'],
        url: 'https://www.fly.faa.gov/ASDI/asdi.html',
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'FLTD/SWIM',
        skillTags: ['flight'],
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
          'dotnet',
          'mvc',
          'entityframework',
          'sqlserver',
          'sharepoint',
          'azure',
          'oracle',
          'rest',
          'css'
        ],
        detailLevel: 2,
        skills: [
          {
            desc: 'Implemented Visitor Management System for School Systems',
            skillTags:[
              'typescript',
              'entityframework',
              'css',
              'dotnet',
              'sqlserver',
              'azure',
              'rest',
              'mvc'
            ],
            detailLevel: 1
          }
        ]
      },
      {
        desc: 'Implemented and maintained visitor management for military bases',
        skillTags:[
          'oracle',
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
          'sharepoint',
          'css'
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
        skillTags: ['dotnet'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'ASP.NET 4.5.1' ,
        skillTags: ['dotnet'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'CSS',
        skillTags: ['css'],
        detailLevel: 4,
        skills: []
      },
      {
        desc: 'jQuery',
        skillTags: ['typescript'],
        detailLevel: 4,
        url: 'https://jquery.com/',
        skills: []
      },
      {
        desc: 'MVC 5' ,
        skillTags: ['mvc'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'EF 6' ,
        skillTags: ['entityframework', 'dotnet', 'sqlserver'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SQL Server 2014 ' ,
        skillTags: ['sqlserver'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2013' ,
        skillTags: ['sharepoint', 'dotnet' ],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'Azure' ,
        skillTags: ['azure'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'WPF' ,
        skillTags: ['dotnet'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'Oracle 11g' ,
        skillTags: ['oracle'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'PL/SQL' ,
        skillTags: ['oracle'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'Toad (Oracle)',
        skillTags: ['oracle'],
        url: 'https://www.quest.com/products/toad-for-oracle/',
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'REST',
        skillTags: ['rest'],
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
        desc: 'Implemented WebNow and ImageNow forms with XML, XSLT, CSS, and iScript.',
        skillTags:['css', 'typescript'],
        detailLevel: 1
      },
      {
        desc: 'Created image file processors to catalog file metadata on upload.',
        skillTags:['dotnet'],
        detailLevel: 2
      },
      {
        desc: 'Created SharePoint Features to provide provisionable capabilities.',
        detailLevel: 2,
        skillTags: ['sharepoint', 'rest']
      }
    ],
    skills: [
      {
        desc: 'C#',
        skillTags: ['dotnet'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'F#',
        skillTags: ['dotnet'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'iScript',
        skillTags: ['typescript'],
        detailLevel: 3,
        skills: []
      },
      {
        desc: 'ASP.NET 4.0' ,
        skillTags: ['dotnet', 'rest'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2010' ,
        skillTags: ['sharepoint', 'dotnet', 'rest'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'ImageNow',
        skillTags: ['css'],
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
        skillTags:[
          'sharepoint',
          'dotnet',
          'css',
          'rest'
        ],
        detailLevel: 1
      },
      {
        desc: 'Created a dynamic header image generator.',
        skillTags:[
          'sharepoint',
          'dotnet',
          'css',
          'rest'
        ],
        detailLevel: 2
      },
    ],
    skills: [
      {
        desc: 'C#',
        skillTags: ['dotnet'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'CSS',
        skillTags: ['css'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SharePoint 2007',
        skillTags: ['sharepoint'],
        detailLevel: 1,
        skills: []
      },
      {
        desc: 'ASP.NET 3.5',
        skillTags: ['dotnet', 'rest'],
        detailLevel: 2,
        skills: []
      },
      {
        desc: 'SOAP',
        skillTags: ['rest'],
        detailLevel: 2,
        skills: []
      }
    ]
  }
]
