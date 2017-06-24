import { BusinessHoursPage } from './app.po';

describe('business-hours App', () => {
  let page: BusinessHoursPage;

  beforeEach(() => {
    page = new BusinessHoursPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
