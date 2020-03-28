import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/Job';
import { Applicant } from '../models/Applicant';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  private constApplicant: Applicant = {
    firstName: 'Brian',
    lastName: 'Arnold',
    middleNameOrInitial: 'C.',
    address1: '3501 Calumet Dr',
    address2: null,
    city: 'Orlando',
    state: 'FL',
    postalCode: '35810',
    phoneNumber: '256-652-6754',
    email: 'brian.ch.arnold@gmail.com',
    skillAreas: [
      {
        desc: 'Frontend',
        skills: [
          {
            desc: 'Angular',
          },
          {
            desc: 'Bootstrap'
          },
          {
            desc: 'RxJS'
          }
        ]
      },
      {
        desc: 'Backend',
        skills: [
          {
            desc: 'C#',
          },
          {
            desc: 'REST'
          },
          {
            desc: 'Entity Framework'
          }
        ]
      },
      {
        desc: 'Database',
        skills: [
          {
            desc: 'Oracle 18c',
          },
          {
            desc: 'Microsoft SQL Server'
          },
          {
            desc: 'Cosmos DB'
          }
        ]
      },
      {
        desc: 'Cloud',
        skills: [
          {
            desc: 'Azure Functions',
          },
          {
            desc: 'Azure CDN'
          },
          {
            desc: 'Azure DevOps'
          }
        ]
      }
    ]
  };

  private constJobs: Job[] = [
    {
      company: 'Red Lobster LLC',
      title: 'Senior Systems Engineer',
      location: 'Orlando, FL',
      startDate: 'May 2018',
      endDate: 'Current',
      achievements: [
        {
          desc: 'Architected and developed multitier application for Azure deployment',
          skills: [
            { desc: 'Database agnostic Data Context implemented with EF Core 2.1' },
            { desc: 'Microservice-compatible Business Logic System' },
            { desc: 'Dynamic Angular 8 site with context dependent display' }
          ]
        },
        { desc: 'Created recursion serialization system for TypeScript' },
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
        { desc: '.NET Core 2.x' },
        { desc: 'Oracle 18c' },
        { desc: 'TypeScript 3.7' },
        { desc: 'Azure Functions' },
        { desc: 'Azure SQL ' },
        { desc: 'Kubernetes' },
        { desc: 'CDN' },
        { desc: 'Azure DevOps',
          skills: [
            { desc: 'CI/CD' },
            { desc: 'Pull Requests' }
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
        { desc: 'Designed replacement message processing architecture' },
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
      endDate: 'Aug 2014',
      achievements: [
        { desc: 'Collaboration with Software Development VP for architecture design' },
        { desc: 'Implemented and maintained visitor management systems for military bases' },
        { desc: 'Designed and implemented REST interfaces for existing SOAP APIs' },
        { desc: 'Designed and implemented SharePoint solution frontend for Oracle data' },
        { desc: 'Developed WPF application to interface biometric devices with website' }
      ],
      skills: [
        { desc: 'C#/VB.NET' },
        { desc: 'ASP.NET 4.5.1' },
        { desc: 'MVC 5' },
        { desc: 'EF 6' },
        { desc: 'SQL Server 2014 ' },
        { desc: 'SharePoint 2013' },
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
      company: 'GROWMARK, Inc.',
      title: 'Contractor',
      location: 'Bloomington, IL',
      startDate: 'Oct 2010',
      endDate: 'Oct 2011',
      achievements: [
        { desc: 'Implemented WebNow and ImageNow forms with XML, XSLT, and iScript' },
        { desc: 'Created image file processors to catalog file metadata on upload' }
      ],
      skills: [
        { desc: 'C#/F#' },
        { desc: 'ASP.NET 4.0' },
        { desc: 'SharePoint 2010' },
        { desc: 'HTML 5' },
        { desc: 'JQuery ' },
        { desc: 'XML' },
        { desc: 'XSLT' },
        { desc: 'XSD' }
      ]
    },
    {
      company: 'BAE Systems',
      title: 'Contractor',
      location: 'Huntsville',
      startDate: 'Dec 2007',
      endDate: 'Oct 2010',
      achievements: [
        { desc: 'Implemented SharePoint Features to provision SharePoint sites' },
        { desc: 'Created customized SharePoint workflows for Contract bidding' }
      ],
      skills: [
        { desc: 'C#'},
        { desc: 'SharePoint 2007'},
        { desc: 'ASP.NET 3.5'},
        { desc: 'HTML 4'},
        { desc: 'XML'},
        { desc: 'SOAP'}
      ]
    }
  ];

  public getResume(): Observable<Job[]> {
    return of(this.constJobs);
  }
  public getApplicant(): Observable<Applicant> {
    return of(this.constApplicant);
  }
}
