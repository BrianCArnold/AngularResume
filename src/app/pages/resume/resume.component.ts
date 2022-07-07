import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Applicant } from 'src/app/models/Applicant';
import { faFilePdf, faFileWord, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faAngular, faBootstrap, faSass, faFontAwesome, faGitAlt, faNodeJs, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { StaticResumeService } from 'src/app/services/resume.service';
import { DetailLevel } from 'src/app/models/Experience';
import { SkillsService } from 'src/app/services/skills.service';
import { ISkillCheckItem, SkillCheckItem } from 'src/app/models/SkillCheckItem';
import { TechStack } from 'src/app/models/TechStack';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  
  @ViewChild('skillChecklist')
  skillChecklist: ElementRef;
  
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
  techUsed: TechStack[] = [
    {
      desc:'Frontend in',
      name:'Angular',
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
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private resumeService: StaticResumeService,
    private skillsService: SkillsService) {
  }
  programmingDisplay: true | false | 'dense' = false;


  public get showDetails(): boolean {
    return this.skillsService.showDetails;
  }
  public set showDetails(v: boolean) {
    this.skillsService.showDetails = v;
  }
  

  get detailLevel(): DetailLevel {
    return this.skillsService.detailLevel;
  }
  set detailLevel(v: DetailLevel) {
    if (v == -1) {
      this.modalService.show(this.skillChecklist, {
        class: 'modal-xl'
      });
    }
    this.skillsService.detailLevel = v;
  }
  get skillCheckList(): ISkillCheckItem[] {
    return this.skillsService.skillCheckList;
  }

  async ngOnInit() {

  this.activatedRoute.data.subscribe(v => {
    this.jobsSource = v.jobs;
    this.applicant = v.applicant;
  });

  }
  

}
