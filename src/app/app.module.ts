import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from "./app.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { ClassComponent } from "./components/class/class.component";
import { StandOutDirective } from "./directives/stand-out.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClassComponent,
    StandOutDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
