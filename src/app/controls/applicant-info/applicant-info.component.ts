import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from 'src/app/models/Applicant';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.scss']
})
export class ApplicantInfoComponent implements OnInit {

  @Input()
  programmingDisplay: boolean;
  
  @Input()
  applicant: Applicant;
  
  public get showDetails(): boolean {
    return this.skills.showDetails;
  }
  public set showDetails(v: boolean) {
    this.skills.showDetails = v;
  }
  
  constructor(private  skills: SkillsService) { }

  ngOnInit(): void {
  }
}
