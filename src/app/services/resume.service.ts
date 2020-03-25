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
    email: 'brian.ch.arnold@gmail.com'
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
          desc: 'Architected and developed three tiered pricing application for Cloud and Datacenter deployment',
          sub: [
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
          sub: [
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
      company: 'GROWMARK, Inc.',
      title: 'Contractor',
      location: 'Bloomington, IL',
      startDate: 'October 2010',
      endDate: 'October 2011',
      achievements: [
        { desc: 'Implemented WebNow and ImageNow forms with XML, XSLT, and iScript.' },
        { desc: 'Created image file processors to read and catalog all XMP, Exif, and IPTC metadata for common image formats when uploaded to SharePoint Document Library' }
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
