import { Component, OnInit } from '@angular/core';
import { ISkillCheckItem } from 'src/app/models/SkillCheckItem';
import { SkillTag } from 'src/app/models/SkillTag';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-check-list',
  templateUrl: './skill-check-list.component.html',
  styleUrls: ['./skill-check-list.component.scss']
})
export class SkillCheckListComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
  }

  get skillCheckList(): ISkillCheckItem[] {
    return this.skillsService.skillCheckList;
  }
  get displayedSkills(): SkillTag[] {
    return this.skillsService.displayedSkills;
  }
  allOff() {
    this.skillsService.skillCheckList.forEach(e => this.turnOff(e));
  }
  turnOff(element: ISkillCheckItem) {
    if (element.children && element.children.length > 0) {
      element.children.forEach(e => this.turnOff(e));
    } else {
      element.isSelected = false;
    }
  }
}
