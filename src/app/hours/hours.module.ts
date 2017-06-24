import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { OverviewComponent } from './overview/overview.component';
import { HoursRouting } from 'app/hours/hours.routing';
import { SharedModule } from "app/shared/shared.module";
import { EditableTimeComponent } from './overview/editable-time/editable-time.component';

@NgModule({
  imports: [
    CommonModule,
    HoursRouting,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    OverviewComponent,
    EditableTimeComponent
  ]
})
export class HoursModule { }
