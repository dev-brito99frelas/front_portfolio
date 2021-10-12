import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**@description componenetes pages */
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    ServicesComponent,
    ProfileComponent,
    ErrorComponent,
    LoginComponent
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
    ErrorComponent,
    LoginComponent
  ]
})
export class PagesModule { }
