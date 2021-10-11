import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description componenetes pages */
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    ServicesComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    ServicesComponent,
    ProfileComponent,
    ErrorComponent
  ]
})
export class PagesModule { }
