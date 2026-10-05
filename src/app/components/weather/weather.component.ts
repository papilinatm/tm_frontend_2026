import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OneDayComponent } from './one-day/one-day.component';
import { ForecastService, IWeatherForecast } from '../../services/forecast/forecast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [OneDayComponent, MatSlideToggle]
})
export class WeatherComponent implements OnInit {

  public DayForecast:IWeatherForecast = {} as IWeatherForecast;
  public WeekForecast:IWeatherForecast[]=[];
  public IsWeek:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private _wfServise:ForecastService,
     private route:Router,
    private cdr: ChangeDetectorRef
  ) { 
    this.IsWeek= activatedRoute.snapshot.params['week']=="week";
  }

  ngOnInit(): void {
    this._wfServise.getDayForecast().subscribe(res=> 
      {
        this.DayForecast=res;      
        this.cdr.detectChanges();
      });
    this._wfServise.getWeekForecast().subscribe(res=> 
      {
        this.WeekForecast=res;      
        this.cdr.detectChanges();
      });
  }
  ChangeForecast(isWeek:boolean){
    //this.IsWeek=isWeek;
    this.DayForecast = {} as IWeatherForecast;
    this.WeekForecast = [];
    this.route.navigate([isWeek?'week':''], {relativeTo: this.activatedRoute});
  }
}

