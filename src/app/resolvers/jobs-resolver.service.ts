import { Injectable } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { Job } from '../models/Job';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService implements Resolve<Job[]> {

  constructor(private resumeService: ResumeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> {
    return this.resumeService.getJobs();
  }


}
