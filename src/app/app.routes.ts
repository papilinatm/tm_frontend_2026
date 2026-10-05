import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';
import { Nginfo } from './components/nginfo/nginfo';


export const routes: Routes = [
  {
    path:'',
    redirectTo:'weather',
    pathMatch: 'full',
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'nginfo',
    component: Nginfo,
  },
  {
    path:'weather',
    children:[
      {
        path:'',
        component: WeatherComponent,
        pathMatch: 'full',
      },
      {
        path: ':week',
        component: WeatherComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
