import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  public data$: Observable<any>;
  public today: Date = new Date();
  public loading = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.route.params
      .pipe(
        map(params => params.locationName),
        filter(name => !!name),
        tap(() => this.loading = true),
        concatMap(name => this.weatherService.getWeatherForCity(name)),
        tap(() => this.loading = false)
      );
  }

}
