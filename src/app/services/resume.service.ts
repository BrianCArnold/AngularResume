import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/Job';
import { Applicant } from '../models/Applicant';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { jobs } from '../data/jobs';
import { applicant } from '../data/applicant';

@Injectable({
  providedIn: 'root'
})
export class StaticResumeService {

  //Hello, you might have ended up here, looking for where the application gets its data
  //Normally, this would be implemented by retrieving the data from an API hosted by 
  //a C# WebAPI project, or a Node.JS server.

  //However, in this case, running those for a relatively static application is a great deal of overhead.

  //So, in this case, it's abstracted in a way that could 
  constructor(
    // private http: HttpClient
  ) { }

  public async getJobsSimpleAsync(): Promise<Job[]> {
    return jobs;
  }
  public async getApplicantAsync(): Promise<Applicant> {
    return applicant;
  }
}