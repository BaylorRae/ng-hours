import { Component, Input } from "@angular/core";
import { Time } from "../../models/time";

@Component({
  selector: 'time',
  template: `{{time.prettyPrint()}}`
})
export class TimeComponent {

  @Input()
  time: Time = new Time('0:0');

  constructor() {
  }
}
