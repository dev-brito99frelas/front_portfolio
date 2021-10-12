import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';
import { FormsComponent } from './forms/forms.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    CardComponent,
    FormsComponent,
    FormsLoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    CardComponent,
    FormsComponent,
    FormsLoginComponent
  ]
})
export class SharedModule { }
