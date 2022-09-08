import { Component } from '@angular/core';
import { Link } from './models/Link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labo-front-end';

  navList: Link[] = [
    {name: 'Home', url: '/', revealed: false},
    {name: 'Login', url: 'auth/login', revealed: false},
    {name: 'Register', url: 'auth/register', revealed: false}
  ]

}
