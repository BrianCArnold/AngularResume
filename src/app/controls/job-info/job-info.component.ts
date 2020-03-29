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

  nextExperienceDetail: Experience | Skill;
  experienceDetail: Experience | Skill;
  showExperienceDetail: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getExperienceDetail(): Experience | Skill {
    return this.experienceDetail;
  }
  setExperienceDetail(v: Experience | Skill) {
    if (v != null && v.details) {
      if (this.experienceDetail) {
        this.nextExperienceDetail = v;
      } else {
        this.experienceDetail = v;
      }
    } else {
      if (this.experienceDetail) {
        this.nextExperienceDetail = v;
      } else {
        this.experienceDetail = v;
      }
    }
    setTimeout(() => {
      if (v && v.details && this.nextExperienceDetail) {
        this.experienceDetail = this.nextExperienceDetail;
        this.nextExperienceDetail = null;
        this.showExperienceDetail = true;
      } else if (v && v.details && this.experienceDetail) {
        this.showExperienceDetail = true;
      } else {
        this.showExperienceDetail = false;
      }
    }, 200);
    // if (v == null) {
    //   this.showExperienceDetail = true;
    //   setTimeout(() => {
    //     if (!this.showExperienceDetail) {
    //       this.experienceDetail = v;
    //     }
    //     }, 500);
    // } else {
    //   this.experienceDetail = v;
    //   setTimeout(() => {
    //     if (!this.experienceDetail) {
    //       this.showExperienceDetail = false;
    //     }
    //     }, 10);
    // }
  }
}
