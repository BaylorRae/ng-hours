import { Component, Input, OnInit } from '@angular/core';

import { Time } from "../../../models/time";

@Component({
  selector: 'app-editable-time',
  templateUrl: './editable-time.component.html',
  styleUrls: ['./editable-time.component.css']
})
export class EditableTimeComponent implements OnInit {

  private _time: Time;

  get time(): Time {
    return this._time;
  }

  @Input('time')
  set time(time: Time) {
    this._time = time;
    this.selectedHour = this.time.twelveHour.toString();
    this.selectedMinute = ('0' + this.time.minute).match(/(\w\w)$/)[1];
    this.selectedMeridiem = this.time.meridiem;
  }

  @Input()
  editing = false;

  hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  minutes = ['00', '15', '30', '45'];
  meridiems = ['am', 'pm'];

  selectedHour: string;
  selectedMinute: string;
  selectedMeridiem: string;

  constructor() { }

  ngOnInit() {
  }

  public newTime(): Time {
    return Time.fromTwelveHourTime({
      hour: parseInt(this.selectedHour, 0),
      minute: parseInt(this.selectedMinute, 0),
      pm: this.selectedMeridiem === 'pm'
    });
  }

}
