import { AppScrumPage } from './app.po';

describe('app-scrum App', function() {
  let page: AppScrumPage;

  beforeEach(() => {
    page = new AppScrumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
