import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countrie$: Observable<Country[]>;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.countrie$ = this.api.getAllCountry();
  }
}
