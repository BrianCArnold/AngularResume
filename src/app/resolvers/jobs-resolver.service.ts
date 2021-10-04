import { Injectable } from '@angular/core';
import { StaticResumeService } from '../services/resume.service';
import { Job } from '../models/Job';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsResolverService implements Resolve<Job[]> {

  constructor(private resumeService: StaticResumeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Job[]> {
    return this.resumeService.getJobsSimpleAsync();
  }


}
