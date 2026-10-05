import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [RouterOutlet, RouterLink, MatSidenavModule, MatDrawer, MatListModule]
})
export class SidenavComponent implements OnInit {
  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
    this.setSidenavControl.emit(this.drawer);
  }

}
