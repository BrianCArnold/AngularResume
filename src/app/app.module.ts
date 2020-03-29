import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JobInfoComponent } from './controls/job-info/job-info.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ApplicantInfoComponent } from './controls/applicant-info/applicant-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    JobInfoComponent,
    ResumeComponent,
    ApplicantInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
