import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**@description Paginas da app */
import { BlogComponent } from './pages/blog/blog.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch: 'full'},
  {path: 'profile',component: ProfileComponent},
  {path: 'projects',component: ProjectsComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'error',component: ErrorComponent},
  {path: 'login',component: LoginComponent},
  {path: '**',redirectTo: 'error'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
