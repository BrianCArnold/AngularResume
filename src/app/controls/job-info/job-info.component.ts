import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { Achievement, DetailLevel } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';
import { ResizeService } from 'src/app/services/resize.service';
import { SCREEN_SIZE } from 'src/app/models/SCREEN_SIZE';
import { BsModalService } from 'ngx-bootstrap';
import { faExternalLinkAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { SkillTag } from 'src/app/models/SkillTag';
import { SubAchievement } from 'src/app/models/JobSkill';

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
  @Input("detailLevel")
  inputDetailLevel: DetailLevel;
  get availableDetailLevels(): { id: DetailLevel, value: string }[] {
    return [{ id: <DetailLevel>1, value: 'Minimal' },{ id: <DetailLevel>2, value: 'Standard' },{ id: <DetailLevel>3, value: 'High' },{ id: <DetailLevel>4, value: 'Full' }].filter(d => this.jobModel.detailLevels.includes(d.id));
  }
  get effectiveSkills(): Skill[] {
    return this.jobModel.skills
    .filter(s => s.detailLevel <= this.effectiveDetailLevel)
    .map(s => {
      return {
        ...s,
        skills: s.skills.filter(k => k.detailLevel <= this.effectiveDetailLevel)
      };
    })
  }
  get effectiveAchievements(): Achievement[] {
    return this.jobModel.achievements.filter(a => a.detailLevel <= this.effectiveDetailLevel)
    .map(a => ({
      ...a,
      skills: this.getEffectiveSubAchievements(a)
    }));
  }
  getEffectiveSubAchievements(a: Achievement): SubAchievement[] {
    var result = a.skills ? a.skills.filter(a => a.detailLevel <= this.effectiveDetailLevel) : [];
    return result.length > 0 ? result : null;
  }
  specificDetailLevel: DetailLevel = null;
  get effectiveDetailLevel(): DetailLevel {
    return this.specificDetailLevel || this.inputDetailLevel;
  }


  experienceDetail: Achievement | Skill;
  showExperienceDetail: boolean;

  faExternalLinkSquareAlt = faExternalLinkAlt;
  faLightbulb = faLightbulb;
  @Input()
  showDetails: boolean;
  @Input()
  programmingDisplay: true | false | 'dense';
  // size: SCREEN_SIZE;

  constructor(private modalService: BsModalService) {
    // this.resizeService.onResize$.subscribe(x => {
    //   this.size = x;
    // });
  }

  ngOnInit(): void {
  }

  currentSkill: SkillTag;
  highlightSkill(skill: Skill) {
    this.currentSkill = skill.skillTag;
    console.log(this.currentSkill);
  }
  unhighlightSkill(skill: Skill) {
    if (this.currentSkill == skill.skillTag) {
      this.currentSkill = null;
    }
  }

  clickExperienceDetail(detail: Achievement | Skill) {
    // if (this.size !== SCREEN_SIZE.XL) {
      this.experienceDetail = detail;
      if (detail.details && detail.details.length > 0){
        this.modalService.show(this.modalDetails, {
          class: 'modal-lg'
        });
      }
    // }
  }

  getExperienceDetail(): Achievement | Skill {
    return this.experienceDetail;
  }
}
