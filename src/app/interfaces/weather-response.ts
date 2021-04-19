import { WeatherSys } from './weather-sys';
import { WeatherMain } from './weather-main';
import { Weather } from './weather';

export interface WeatherResponse {
  name: string;
  cod: number;
  sys: WeatherSys;
  main: WeatherMain;
  weather: Weather;
}
