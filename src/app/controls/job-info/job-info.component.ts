import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { Experience } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';
import { ResizeService } from 'src/app/services/resize.service';
import { SCREEN_SIZE } from 'src/app/models/SCREEN_SIZE';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {
  @Input()
  jobModel: Job;
  @ViewChild('modalDetails')
  modalDetails: ElementRef;
  nextExperienceDetail: Experience | Skill;
  experienceDetail: Experience | Skill;
  showExperienceDetail: boolean;
  size: SCREEN_SIZE;

  constructor(private resizeService: ResizeService, private modalService: BsModalService) {
    this.resizeService.onResize$.subscribe(x => {
      this.size = x;
    });
  }

  ngOnInit(): void {
  }

  clickExperienceDetail(detail: Experience | Skill) {
    if (this.size !== SCREEN_SIZE.XL) {
      this.experienceDetail = detail;
      this.modalService.show(this.modalDetails);
    }
  }

  getExperienceDetail(): Experience | Skill {
    return this.experienceDetail;
  }
  setExperienceDetail(v: Experience | Skill) {
    if (this.size === SCREEN_SIZE.XL) {
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
    }
  }
}
