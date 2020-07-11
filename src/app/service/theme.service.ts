import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme{
  dark = 'dark',
  light = 'light'
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private mode: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);

  constructor() { }

  get mode$(){
    return this.mode.asObservable();
  }

  toogleMode(){
    if (this.mode.value === Theme.dark) {
      this.mode.next(Theme.light);
    } else {
      this.mode.next(Theme.dark);
    }
  }
}
