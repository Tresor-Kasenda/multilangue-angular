import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  language = { name: 'Français', locale: 'fr' };
  languages = [
    { name: 'Français', locale: 'fr' },
    { name: 'Anglais', locale: 'en' },
  ];

  constructor(private themeSerice: ThemeService, public translate: TranslateService) {
    this.translate.use(this.translate.currentLang);
    this.language = this.languages.find(item => item.locale === translate.currentLang);
  }

  toggleTheme(){
    this.themeSerice.toogleMode();
  }

  onChangeLanguage = () => {
    this.translate.use(this.language.locale);
  }

}
