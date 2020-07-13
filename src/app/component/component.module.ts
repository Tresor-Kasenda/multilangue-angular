import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CardeComponent } from './carde/carde.component';


@NgModule({
  declarations: [
    NavComponent,
    CardeComponent,
  ],
  exports: [
    NavComponent,
    CardeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
  ]
})
export class ComponentsModule {
}
