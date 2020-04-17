import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/Job';
import { Applicant } from '../models/Applicant';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = '/api/';

  public getJobsSimple(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiBaseUrl + 'jobs_simple');
  }
  public getJobsDetail(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiBaseUrl + 'jobs_detail');
  }
  public getApplicant(): Observable<Applicant> {
    return this.http.get<Applicant>(this.apiBaseUrl + 'applicant');
  }
}
