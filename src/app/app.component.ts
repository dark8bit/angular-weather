import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CountriesList } from './models/countries-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public countries = CountriesList;
  public cityControl: FormControl;
  public countryControl: FormControl;
  public cities$: Observable<any>;

  constructor(
    private router: Router
  ) {
    this.cityControl = new FormControl('');
    this.countryControl = new FormControl('');
  }

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe(value => {
      this.router.navigate([value]);
    });

    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );
  }

  ngOnDestroy(): void {
  }
}
