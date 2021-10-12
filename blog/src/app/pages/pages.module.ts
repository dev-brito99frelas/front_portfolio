import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**@description componenetes pages */
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PostListService } from './blog/post-list.service';

/**@description Services dos componnets */

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
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    ServicesComponent,
    ProfileComponent,
    ErrorComponent,
    LoginComponent
  ],
  providers:[
    PostListService
  ]
})
export class PagesModule { }
