import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {
  @Input()
  jobModel: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
