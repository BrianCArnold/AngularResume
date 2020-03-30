import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  @Input()
  experienceDetail: Experience | Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
