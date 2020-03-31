import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Applicant } from 'src/app/models/Applicant';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant;
  jobs: Job[];
  faFilePdf = faFilePdf;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {

      this.activatedRoute.data.subscribe(v => {
        this.jobs = v.jobs;
        this.applicant = v.applicant;
      });

  }

}
