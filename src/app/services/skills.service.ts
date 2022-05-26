import { Injectable } from '@angular/core';
import { DetailLevel } from '../models/Experience';
import { ISkillCheckItem, SkillCheckItem } from '../models/SkillCheckItem';
import { SkillTag } from '../models/SkillTag';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  private _highlightedSkills: SkillTag[] = [];
  get highlightedSkills(): SkillTag[] {
    return this._highlightedSkills;
  }
  set highlightedSkills(skills: SkillTag[]) {
    this._highlightedSkills = skills;
  }

  private _detailLevel: DetailLevel = 2;
  get detailLevel(): DetailLevel {
    return this._detailLevel;
  }
  set detailLevel(v: DetailLevel) {
    this._detailLevel = v;
  }

  skillCheckList: ISkillCheckItem[] = [
    new SkillCheckItem(null, 'Frontend', true, false, [
      new SkillCheckItem('angular', 'Angular'),
      new SkillCheckItem('css', 'SCSS/CSS/...'),
      new SkillCheckItem('typescript', 'TypeScript/JS/...'),
      new SkillCheckItem('mvc', 'MVC'),
    ]),
    new SkillCheckItem(null, 'Backend', true, false, [
      new SkillCheckItem('dotnet', '.NET'),
      new SkillCheckItem('rest', 'WebAPI'),
      new SkillCheckItem('entityframework', "Entity Framework/..."),
    ]),
    new SkillCheckItem(null, 'Databases', true, false, [
      new SkillCheckItem('sqlserver', "SQL Server"),
      new SkillCheckItem('oracle', "Oracle"),
      new SkillCheckItem('nosql', "NoSQL")
    ]),
    new SkillCheckItem(null, 'Cloud', true, false, [
      new SkillCheckItem('serverless', 'Serverless'),
      new SkillCheckItem('containers', 'Containers'),
      new SkillCheckItem('azure', "Azure"),
      new SkillCheckItem('cloud', "Hybrid")
    ]),
    new SkillCheckItem(null, 'Development', true, false, [
      new SkillCheckItem('devops', "Source Control"),
      new SkillCheckItem('cicd', "CI/CD"),
    ]),
    new SkillCheckItem(null, 'Other', true, false, [
      new SkillCheckItem('sharepoint', "SharePoint"),
      new SkillCheckItem('flight', "Flight Data"),
    ])
  ];

  get displayedSkills(): SkillTag[] {
    return this.skillCheckList.map(i => i.children.concat(i)).reduce((p,n) => p.concat(n)).filter(p => p.isSelected && p.value).map(p => p.value);
  }
}
