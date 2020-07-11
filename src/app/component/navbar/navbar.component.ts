import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(private themeSerice: ThemeService) { }

  toggleTheme(){
    this.themeSerice.toogleMode();
  }

}
