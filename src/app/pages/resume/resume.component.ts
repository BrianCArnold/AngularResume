import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Applicant } from 'src/app/models/Applicant';
import { faFilePdf, faFileWord, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faAngular, faBootstrap, faSass, faFontAwesome, faGitAlt, faNodeJs, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ResumeService } from 'src/app/services/resume.service';
import { DetailLevel } from 'src/app/models/Experience';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant;
  jobsSource: Job[];
  faFilePdf = faFilePdf;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faFontAwesome = faFontAwesome;
  faGitAlt = faGitAlt;
  faNodeJs = faNodeJs;
  faMicrosoft = faMicrosoft;
  faSass = faSass;
  faFileWord = faFileWord;
  techUsed: {
      desc: string,
      name: string,
      icon: IconDefinition,
      class: string,
      url: string
    }[] = [
    {
      desc:'Frontend in',
      name:'Angular 11',
      icon: faAngular,
      class: 'btn-danger',
      url: 'https://angular.io'
    },
    {
      desc:'PDF generator in',
      name:'Node.js',
      icon: faNodeJs,
      class: 'btn-success',
      url: 'https://nodejs.org'
    },
    {
      desc:'CI/CD mananged in',
      name:'Azure DevOps',
      icon: faMicrosoft,
      class: 'btn-primary',
      url: 'https://dev.azure.com'
    },
    {
      desc:'Hosted by',
      name:'Azure CDN',
      icon: faMicrosoft,
      class: 'btn-primary',
      url: 'https://azure.microsoft.com/en-us/services/cdn'
    },
    {
      desc:'Source Control in',
      name:'Git',
      icon: faGitAlt,
      class: 'btn-git',
      url: 'https://git-scm.com'
    },
    {
      desc:'Icons from',
      name:'Font Awesome',
      icon: faFontAwesome,
      class: 'btn-primary',
      url: 'https://fontawesome.com'
    },
    {
      desc:'Base Styles from',
      name:'Bootstrap',
      icon: faBootstrap,
      class: 'btn-bootstrap',
      url: 'https://getbootstrap.com'
    },
    {
      desc:'Custom Styles in',
      name:'Sass',
      icon: faSass,
      class: 'btn-sass',
      url: 'https://sass-lang.com'
    },
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private resumeService: ResumeService) {
  }
  programmingDisplay: true | false | 'dense' = true;
  detailLevel: DetailLevel = 2;

  async ngOnInit() {

  this.activatedRoute.data.subscribe(v => {
    this.jobsSource = v.jobs;
    this.applicant = v.applicant;
  });

  }

}
