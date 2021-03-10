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
export class ResumeService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = '/api/';

  public async getJobsSimpleAsync(): Promise<Job[]> {
    return jobs;
  }
  public async getApplicantAsync(): Promise<Applicant> {
    return applicant;
  }
}
