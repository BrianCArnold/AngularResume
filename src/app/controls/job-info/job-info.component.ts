import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { Experience } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {
  @Input()
  jobModel: Job;

  experienceDetail: Experience | Skill;

  constructor() { }

  ngOnInit(): void {
  }

  getExperienceDetail(): Experience | Skill {
    return this.experienceDetail;
  }
  setExperienceDetail(v: Experience | Skill) {
    if (v == null) {
      this.experienceDetail = v;
    } else {
      setTimeout(() => this.experienceDetail = v, 10);
    }
  }
}
