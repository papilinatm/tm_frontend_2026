import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';
import { OneDayComponent } from './one-day/one-day.component';
import { ForecastService, IWeatherForecast } from '../../services/forecast/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [OneDayComponent, MatSlideToggle]
})
export class WeatherComponent implements OnInit, OnDestroy {
  
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly forecastService = inject(ForecastService);
  private readonly route = inject(Router);

  public readonly dayForecast = signal<IWeatherForecast | null>(null);
  public readonly weekForecast = signal<IWeatherForecast[]>([]);
  public readonly isWeek = signal<boolean>(false);

  private routeSub?: Subscription;
  private forecastDataSub?: Subscription;

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.isWeek.set(params['week'] === 'week');
      this.loadForecastData();
    });
  }

  private loadForecastData(): void {
    this.forecastDataSub?.unsubscribe(); 

    this.dayForecast.set(null);
    this.weekForecast.set([]);

    if (this.isWeek()) {
      this.forecastDataSub = this.forecastService.getWeekForecast().subscribe(res => {
        this.weekForecast.set(res); 
      });
    } else {
      this.forecastDataSub = this.forecastService.getDayForecast().subscribe(res => {
        this.dayForecast.set(res); 
      });
    }
  }

  public changeForecast(checked: boolean): void {
    this.route.navigate([checked ? '/weather/week' : '/weather']);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.forecastDataSub?.unsubscribe();
  }
}
