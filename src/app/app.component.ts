import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'res';
  // tslint:disable: max-line-length
  resume = [
    {
      company: 'Red Lobster LLC',
      title: 'Senior Systems Engineer',
      location: 'Orlando, FL',
      startDate: 'May 2018',
      endDate: 'Current',
      achievements: [
        {
          desc: 'Architected and developed three tiered pricing application for Cloud and Datacenter deployment',
          subAchievements: [
            { desc: 'Database agnostic Data Context implemented with EF Core 2.1' },
            { desc: 'Microservice-compatible Business Logic System' },
            { desc: 'Dynamic Angular 8 site with context dependent display' }
          ]
        },
        { desc: 'Created self-referential recursive serialization systems in C# and TypeScript' },
        { desc: 'Replaced flat file intra-system communication endpoints with modern APIs' },
        { desc: 'Configured DevOps CI/CD pipelines for separate tier deployment' },
        { desc: 'Utilized CI/CD pipelines to deploy bug fixes same-day' },
        { desc: 'Reduced known regression occurrence to zero' },
        { desc: 'Upgraded frontend from Angular 7 to Angular 9 during development' },
        { desc: 'Upgraded backend from EF 6.1 to EF Core 2.1' }
      ],
      skills: [
        { desc: 'Angular 7/8/9' },
        { desc: 'Bootstrap 4.x' },
        { desc: '.NET Core 2.1-3.1' },
        { desc: 'Oracle 18c' },
        { desc: 'TypeScript 3.7' },
        { desc: 'Azure Functions' },
        { desc: 'Azure SQL ' },
        { desc: 'Docker/Kubernetes' },
        { desc: 'CDN' },
        { desc: 'Azure DevOps',
          subSkills: [
            { desc: 'CI/CD Pipelines' },
            { desc: 'Pull Requests' },
            { desc: 'Branch Policies' }
          ]
        }
      ]
    },
    {
      company: 'Acme AtronOmatic LLC',
      title: 'Senior Software Engineer',
      location: 'Orlando, FL',
      startDate: 'Aug 2014',
      endDate: 'Apr 2018',
      achievements: [
        { desc: 'Designed replacement message processing architecture for Solution Architect' },
        { desc: 'Updated ASMX webservices to WebAPI' },
        { desc: 'Created a CosmosDB persisted flight status in-memory cache' },
        { desc: 'Managed network architecture for hybrid datacenter and cloud environment' },
        { desc: 'Developed server management applications in WPF' }
      ],
      skills: [
        { desc: 'C#' },
        { desc: '.NET 4.6.1' },
        { desc: '.NET Core 1.1' },
        { desc: 'ASP.NET ' },
        { desc: 'Azure SQL' },
        { desc: 'Redis' },
        { desc: 'ASDI' },
        { desc: 'FLTD/SWIM' },
        { desc: 'SOAP' },
        { desc: 'REST' }
      ]
    },
    {
      company: 'Hunt Engineering Services, Inc.',
      title: 'Senior Software Engineer',
      location: 'Celebration, FL',
      startDate: 'Nov 2011',
      endDate: 'August 2014',
      achievements: [
        { desc: 'Collaboration with Software Development VP for architecture design' },
        { desc: 'Implemented and maintained enterprise level visitor management systems for military and academic campuses with facial tracking, ID validation, fingerprint matching, and visitor pass printing' },
        { desc: 'Designed and implemented centralized REST web service to unify accessing abstracted data from SOAP web services, external XML data files, Oracle 11g tables and views, and Microsoft SQL Server tables and views.' },
        { desc: 'Participated in the design and implementation of SharePoint Online solutions accessing both local and web service data' },
        { desc: 'Developed WPF application to interface RFID and fingerprint devices with integrated browser' }

      ],
      skills: [
        { desc: 'C#/VB.NET' },
        { desc: 'ASP.NET 4.5.1' },
        { desc: 'MVC 5' },
        { desc: 'Entity Framework 6' },
        { desc: 'SQL Server 2014 ' },
        { desc: 'SharePoint Online' },
        { desc: 'Microsoft Azure' },
        { desc: 'WPF' },
        { desc: 'Oracle 11g' },
        { desc: 'PL/SQL' },
        { desc: 'Toad for Oracle' },
        { desc: 'Objective C' },
        { desc: 'Java' },
        { desc: 'SOAP' },
        { desc: 'REST' }
      ]
    },
    {
      company: 'Acme AtronOmatic LLC',
      title: 'Senior Software Engineer',
      location: 'Orlando, FL',
      startDate: 'Aug 2014',
      endDate: 'Apr 2018',
      achievements: [
        { desc: 'Designed replacement message processing architecture for Solution Architect' },
        { desc: 'Updated ASMX webservices to WebAPI' },
        { desc: 'Created a CosmosDB persisted flight status in-memory cache' },
        { desc: 'Managed network architecture for hybrid datacenter and cloud environment' },
        { desc: 'Developed server management applications in WPF' }
      ],
      skills: [
        { desc: 'C#' },
        { desc: '.NET 4.6.1' },
        { desc: '.NET Core 1.1' },
        { desc: 'ASP.NET ' },
        { desc: 'Azure SQL' },
        { desc: 'Redis' },
        { desc: 'ASDI' },
        { desc: 'FLTD/SWIM' },
        { desc: 'SOAP' },
        { desc: 'REST' }
      ]
    },
    {
      company: 'Acme AtronOmatic LLC',
      title: 'Senior Software Engineer',
      location: 'Orlando, FL',
      startDate: 'Aug 2014',
      endDate: 'Apr 2018',
      achievements: [
        { desc: 'Designed replacement message processing architecture for Solution Architect' },
        { desc: 'Updated ASMX webservices to WebAPI' },
        { desc: 'Created a CosmosDB persisted flight status in-memory cache' },
        { desc: 'Managed network architecture for hybrid datacenter and cloud environment' },
        { desc: 'Developed server management applications in WPF' }
      ],
      skills: [
        { desc: 'C#' },
        { desc: '.NET 4.6.1' },
        { desc: '.NET Core 1.1' },
        { desc: 'ASP.NET ' },
        { desc: 'Azure SQL' },
        { desc: 'Redis' },
        { desc: 'ASDI' },
        { desc: 'FLTD/SWIM' },
        { desc: 'SOAP' },
        { desc: 'REST' }
      ]
    },

  ];
}
