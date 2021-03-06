import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logotipo: string = '../../../assets/logo.png';
  public login: string = '../../../assets/log-in-outline.png';

  constructor() { }

  ngOnInit(): void {
  }

}
