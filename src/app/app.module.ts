import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { HoursService } from './services/hours.service';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HoursModule } from './hours/hours.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HoursModule,
    AppRouting,
    SharedModule
  ],
  providers: [
    { provide: HoursService, useValue: new HoursService() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
