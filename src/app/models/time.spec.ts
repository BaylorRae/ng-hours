import { Time } from './time';

describe('Time', () => {

  describe('hour', () => {
    it('gets the hour', () => {
      const time = new Time('11:45');
      expect(time.hour).toBe(11);
    });

    it('gets the hour from pm', () => {
      const time = new Time('14:15');
      expect(time.hour).toBe(14);
    });
  });

  describe('twelveHour', () => {
    it('gets the twelve hour time', () => {
      const time = new Time('8:30');
      expect(time.twelveHour).toBe(8);
    });

    it('gets the twelve hour time from pm', () => {
      const time = new Time('16:45');
      expect(time.twelveHour).toBe(4);
    });
  });

  describe('minute', () => {
    it('gets the minute', () => {
      const time = new Time('19:15');
      expect(time.minute).toBe(15);
    });
  });

  describe('meridiem', () => {
    it('gets am', () => {
      const time = new Time('2:30');
      expect(time.meridiem).toBe('am');
    });

    it('gets pm', () => {
      const time = new Time('20:45');
      expect(time.meridiem).toBe('pm');
    });

    it('gets pm from noon', () => {
      const time = new Time('12:00');
      expect(time.meridiem).toBe('pm');
    });
  });

  describe('prettyPrint', () => {
    it('formats ante-meridiem', () => {
      const time = new Time('7:45');
      expect(time.prettyPrint()).toBe('07:45 am');
    });

    it('formats post-meridiem', () => {
      const time = new Time('17:15');
      expect(time.prettyPrint()).toBe('05:15 pm');
    });

    it('adds leading 0 to numbers', () => {
      const time = new Time('6:00');
      expect(time.prettyPrint()).toBe('06:00 am');
    });
  });

  describe('fromTwelveHourTime', () => {
    it('builds ante-meridiem time', () => {
      const time = Time.fromTwelveHourTime({ hour: 10, minute: 15, pm: false });
      expect(time.twentyFourHourTime).toBe('10:15');
    });

    it('builds post-meridiem time', () => {
      const time = Time.fromTwelveHourTime({ hour: 10, minute: 15, pm: true });
      expect(time.twentyFourHourTime).toBe('22:15');
    });

    it("doesn't add twelve hours to noon", () => {
      const time = Time.fromTwelveHourTime({ hour: 12, minute: 0, pm: true });
      expect(time.twentyFourHourTime).toBe('12:0');
    });
  });

});
