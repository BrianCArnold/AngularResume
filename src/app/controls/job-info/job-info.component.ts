import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { Achievement, DetailLevel } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';
import { BsModalService } from 'ngx-bootstrap';
import { faExternalLinkAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { SkillTag } from 'src/app/models/SkillTag';
import { SubAchievement } from 'src/app/models/JobSkill';
import { SkillsService } from 'src/app/services/skills.service';

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
  get inputDetailLevel(): DetailLevel {
    return this.skillsService.detailLevel;
  }
  get availableDetailLevels(): { id: DetailLevel, value: string }[] {
    return [{ id: <DetailLevel>1, value: 'Minimal' },{ id: <DetailLevel>2, value: 'Standard' },{ id: <DetailLevel>3, value: 'High' },{ id: <DetailLevel>4, value: 'Full' }].filter(d => this.jobModel.detailLevels.includes(d.id));
  }
  isEffective(s: Skill | Achievement | SubAchievement) {
    if (this.inputDetailLevel == -1) {
      let skillCheck = s.skillTags.concat((s.skills || []).map((sub: Skill | SubAchievement) => sub.skillTags).reduce((p,n) => p.concat(n), []));
      return skillCheck.filter(v => this.skillsService.displayedSkills.includes(v)).length > 0;
    }
    else {
      return s.detailLevel <= this.effectiveDetailLevel;
    }
  }
  get effectiveSkills(): Skill[] {
    return this.jobModel.skills
    .filter(s => this.isEffective(s))
    .map(s => {
      return {
        ...s,
        skills: s.skills.filter(k => this.isEffective(k))
      };
    })
  }
  get effectiveAchievements(): Achievement[] {
    return this.jobModel.achievements.filter(a => this.isEffective(a))
    .map(a => ({
      ...a,
      skills: this.getEffectiveSubAchievements(a)
    }));
  }
  getEffectiveSubAchievements(a: Achievement): SubAchievement[] {
    var result = a.skills ? a.skills.filter(a => this.isEffective(a)) : [];
    return result.length > 0 ? result : null;
  }
  _specificDetailLevel: DetailLevel = null;
  get specificDetailLevel(): DetailLevel {
    return this._specificDetailLevel;
  }
  set specificDetailLevel(v: DetailLevel) {
    this._specificDetailLevel = v;
  }
  get effectiveDetailLevel(): DetailLevel {
    return this.specificDetailLevel || this.inputDetailLevel;
  }


  experienceDetail: Achievement | Skill;
  showExperienceDetail: boolean;

  faExternalLinkSquareAlt = faExternalLinkAlt;
  faLightbulb = faLightbulb;

  @Input()
  programmingDisplay: true | false | 'dense';
  // size: SCREEN_SIZE;

  constructor(private modalService: BsModalService, private skillsService: SkillsService) {
    // this.resizeService.onResize$.subscribe(x => {
    //   this.size = x;
    // });
  }

  ngOnInit(): void {
  }

  matchesSkills(skills: SkillTag[]): boolean {
    for (let i = 0; i < skills.length; i++)
    {
      if (this.currentSkills.includes(skills[i]))
      {
        return true;
      }
    }
    return false;
  }
  currentSkills: SkillTag[] = [];
  highlightSkill(skill: Skill) {
    this.currentSkills = skill.skillTags;
    console.log(this.currentSkills);
  }
  unhighlightSkill(skill: Skill) {
    if (this.currentSkills == skill.skillTags) {
      this.currentSkills = null;
    }
  }

  clickExperienceDetail(detail: Achievement) {
    // if (this.size !== SCREEN_SIZE.XL) {
      this.experienceDetail = detail;
      if (detail.details && detail.details.length > 0){
        this.modalService.show(this.modalDetails, {
          class: 'modal-lg'
        });
      }
    // }
  }

  getExperienceDetail(): Achievement {
    return this.experienceDetail;
  }
}
