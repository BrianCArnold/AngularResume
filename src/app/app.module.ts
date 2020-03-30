import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JobInfoComponent } from './controls/job-info/job-info.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ApplicantInfoComponent } from './controls/applicant-info/applicant-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { SizeDetectorComponent } from './controls/size-detector/size-detector.component';
import { ExperienceDetailsComponent } from './controls/experience-details/experience-details.component'

@NgModule({
  declarations: [
    AppComponent,
    JobInfoComponent,
    ResumeComponent,
    ApplicantInfoComponent,
    SizeDetectorComponent,
    ExperienceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    BsModalRef,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
