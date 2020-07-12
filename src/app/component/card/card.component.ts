import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/service/api.service';
import { Country } from '../../model/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  country: Country;

  constructor(private api: ApiService, private route: ActivatedRoute, public translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnInit(): void {
  }
}
