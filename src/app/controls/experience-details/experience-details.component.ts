import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { Achievement } from 'src/app/models/Experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  @Input()
  experienceDetail: Achievement | Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
