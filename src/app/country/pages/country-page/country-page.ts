import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-page',
  imports: [],
  templateUrl: './country-page.html',
})
export class CountryPage implements OnInit {
  private countryRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.countryRoute.paramMap.subscribe((param) => {
      console.log(param.get('query'));
    });
  }
}
