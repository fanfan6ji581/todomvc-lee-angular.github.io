import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    SpinnerComponent,
    NavbarComponent,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule
  ],
  providers: [],
})
export class AppSharedModule { }
