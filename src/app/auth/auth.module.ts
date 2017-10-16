import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../shared/app-shared.module';
import { LoginComponent } from './login/login.component';
import { routes } from './auth.routes';

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
