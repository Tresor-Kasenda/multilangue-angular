import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Country } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-carde',
  templateUrl: './carde.component.html',
  styleUrls: ['./carde.component.scss']
})
export class CardeComponent implements OnInit {

  @Input()
  country: Country;

  constructor(private api: ApiService, private route: ActivatedRoute, public translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnInit(): void {
  }

}
