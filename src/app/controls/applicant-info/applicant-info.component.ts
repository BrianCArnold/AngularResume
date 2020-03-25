import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from 'src/app/models/Applicant';

@Component({
  selector: 'app-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.css']
})
export class ApplicantInfoComponent implements OnInit {

  @Input()
  applicant: Applicant;

  constructor() { }

  ngOnInit(): void {
  }
}
