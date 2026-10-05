import { Component, OnInit, Input } from '@angular/core';
import { IWeatherForecast } from './../../../services/forecast/forecast.service';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.css'],
  imports: [MatCardModule, DatePipe] 
})
export class OneDayComponent implements OnInit {

  @Input()
  public f:IWeatherForecast = {} as IWeatherForecast;
  constructor() { }

  ngOnInit(): void {
  }
  public getColor(f: IWeatherForecast):string {
    if(f?.temperatureC<0)
      return "cold";
    else if (f?.temperatureC<25)
      return "warm";
    else return "hot";
  }
}
