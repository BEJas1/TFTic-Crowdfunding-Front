import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navList!: Link[]

  constructor() { }

  ngOnInit(): void {
  }

  revealLink(index: number){
    this.navList[index].revealed = !this.navList[index].revealed
  }

}
