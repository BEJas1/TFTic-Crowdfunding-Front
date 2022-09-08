import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navList!: Link[]

  constructor() { }

  ngOnInit(): void {
  }

}
