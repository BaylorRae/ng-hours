import { Component, OnInit, ViewChild } from '@angular/core';

import { HoursService } from '../../services/hours.service';
import { EditableTimeComponent } from "./editable-time/editable-time.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  editing = false;

  @ViewChild('startTime') startTime: EditableTimeComponent;
  @ViewChild('endTime') endTime: EditableTimeComponent;

  constructor(public hoursService: HoursService ) { }

  ngOnInit() {
  }

  edit(): void {
    this.editing = true;
  }

  cancel(): void {
    this.editing = false;
  }

  save(): void {
    this.hoursService.startTime = this.startTime.newTime();
    this.hoursService.endTime = this.endTime.newTime();
    this.editing = false;
  }

}
