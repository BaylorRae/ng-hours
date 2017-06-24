import { Injectable } from '@angular/core';

import { Time } from "../models/time";

@Injectable()
export class HoursService {

  startTime: Time = new Time('9:30');
  endTime: Time = new Time('17:00');

  constructor() { }

}
