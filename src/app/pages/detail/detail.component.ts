import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Observable, of } from 'rxjs';
import { Country } from 'src/app/model/model';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country$: Observable<Country>;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getcountry(name){
    this.country$ = this.api.getCountryByname(name);
  }

}
