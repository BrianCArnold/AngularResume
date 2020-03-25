import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Applicant } from 'src/app/models/Applicant';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant;
  jobs: Job[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {

      this.activatedRoute.data.subscribe(v => {
        this.jobs = v.jobs;
        this.applicant = v.applicant;
      });

  }

}
