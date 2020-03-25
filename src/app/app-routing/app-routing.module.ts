import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '../pages/resume/resume.component';
import { JobsResolverService } from '../resolvers/jobs-resolver.service';
import { ApplicantResolverService } from '../resolvers/applicant-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    resolve: {
      jobs: JobsResolverService,
      applicant: ApplicantResolverService
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
