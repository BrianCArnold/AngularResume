import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Applicant } from 'src/app/models/Applicant';
import { faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faAngular, faBootstrap, faSass, faFontAwesome, faGitAlt, faNodeJs, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ResumeService } from 'src/app/services/resume.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant;
  jobs: Job[];
  faFilePdf = faFilePdf;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faFontAwesome = faFontAwesome;
  faGitAlt = faGitAlt;
  faNodeJs = faNodeJs;
  faMicrosoft = faMicrosoft;
  faSass = faSass;
  faFileWord = faFileWord;
  constructor(private activatedRoute: ActivatedRoute, private resumeService: ResumeService) {
  }
  toggles: any[] = [
    { id: true, value: 'Detailed' },
    { id: false, value: 'Minimalist' },
  ];
  internalShowDetails = false;
  get showDetails(): boolean {
    return this.internalShowDetails;
  }
  set showDetails(v: boolean) {
    this.internalShowDetails = v;
    (v ? this.resumeService.getJobsDetail() : this.resumeService.getJobsSimple()).toPromise().then(j => {
      this.jobs = j;
      console.log(this.jobs);
      console.log('Setting Jobs.');
    });
  }
  async ngOnInit() {

  this.activatedRoute.data.subscribe(v => {
    this.jobs = v.jobs;
    this.applicant = v.applicant;
  });

  }

}
