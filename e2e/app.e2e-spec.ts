import { Angular2demoPage } from './app.po';

describe('angular2demo App', () => {
  let page: Angular2demoPage;

  beforeEach(() => {
    page = new Angular2demoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
