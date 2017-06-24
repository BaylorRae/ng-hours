import { Component, OnInit } from '@angular/core';

import { HoursService } from '../../services/hours.service';
import { Time } from "../../models/time";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  editing = false;

  newStartTime: Time;
  newEndTime: Time;

  constructor(public hoursService: HoursService ) { }

  ngOnInit() {
  }

  edit(): void {
    this.editing = true;
  }

  save(): void {
    this.hoursService.startTime = this.newStartTime;
    this.hoursService.endTime = this.newEndTime;
    this.editing = false;
  }

}
