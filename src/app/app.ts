import { MatDrawer } from '@angular/material/sidenav';
import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, HeaderComponent, SidenavComponent]
})
export class App {
  
  protected readonly title = signal('tm-frontend');
  
  public sidenav!: MatDrawer;  

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }
}
