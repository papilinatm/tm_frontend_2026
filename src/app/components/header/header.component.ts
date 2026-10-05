import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatToolbar]
})
export class HeaderComponent implements OnInit {

  public title= "TM forecast"
  
  @Input()
  public sidenavDrawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.sidenavDrawer.toggle();
  }
}
