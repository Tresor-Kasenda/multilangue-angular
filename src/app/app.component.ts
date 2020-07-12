import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme: Observable<Theme>;

  constructor(private themeSerice: ThemeService){}

  ngOnInit(){
    this.theme = this.themeSerice.mode$;
  }
}
