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

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/api/jobs');
  }
  public getApplicant(): Observable<Applicant> {
    return this.http.get<Applicant>('/api/applicant');
  }
}
