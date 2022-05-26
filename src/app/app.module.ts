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
import { ExperienceDetailsComponent } from './controls/experience-details/experience-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RadioListComponent } from './controls/radio-list/radio-list.component';
import { ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SkillCheckListComponent } from './controls/skill-check-list/skill-check-list.component';
import { CheckswitchComponent } from './controls/checkswitch/checkswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    JobInfoComponent,
    ResumeComponent,
    ApplicantInfoComponent,
    SizeDetectorComponent,
    ExperienceDetailsComponent,
    RadioListComponent,
    SkillCheckListComponent,
    CheckswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [
    BsModalRef,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
