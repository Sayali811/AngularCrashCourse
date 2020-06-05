import {CoursesComponent } from './courses.component';
import {CoursesService } from './courses.service';
import { AuthorsComponent } from './authors.component';
import {AuthorsService } from './authors.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
 
   CoursesComponent,
 AuthorsComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [
	  CoursesService,
	  AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
