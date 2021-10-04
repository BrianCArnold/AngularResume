import { Injectable } from '@angular/core';
import { StaticResumeService } from '../services/resume.service';
import { Applicant } from '../models/Applicant';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantResolverService implements Resolve<Applicant> {

  constructor(private resumeService: StaticResumeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Applicant> {
    return this.resumeService.getApplicantAsync();
  }
}
