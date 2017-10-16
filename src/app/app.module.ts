import { NgModule, APP_INITIALIZER } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppSharedModule } from './shared/app-shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFilterPipe } from './todo-list/shared/task-filter.pipe';
import { TaskSearchFilterPipe } from './todo-list/shared/task-search-filter.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';
import { environment } from '../environments/environment';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AuthService } from './auth/shared/auth.service';
import { AuthGuard } from './auth/shared/auth-guard.service';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';

export const factory = (authService: AuthService) => {
  return () => authService.initialize();
};

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    TaskSearchFilterPipe,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppSharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: APP_INITIALIZER,
      deps: [AuthService, AngularFireAuth],
      multi: true,
      useFactory: factory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
