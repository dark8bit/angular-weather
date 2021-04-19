import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { WeatherResponse } from '../interfaces/weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'https://api.openweathermap.org/data/2.5/weather';
  private keyAPI = '963b9f825d47e45e3917d9274b615905';

  constructor(
    private http: HttpClient
  ) {
  }

  public getWeatherForCity(city: string): Observable<any> {
    const path = `${this.URL}?q=${city}&units=metric&APPID=${this.keyAPI}`;

    return this.http.get(path)
      .pipe(
        map((data: WeatherResponse) => ({
          ...data,
          image: `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
        })),
        delay(500)
      );
  }
}
