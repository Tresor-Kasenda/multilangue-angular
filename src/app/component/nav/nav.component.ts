import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  language = { name: 'Français', locale: 'fr' };
  languages = [
    { name: 'Français', locale: 'fr' },
    { name: 'Anglais', locale: 'en' },
    { name: 'Arable', locale: 'ar' },
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
