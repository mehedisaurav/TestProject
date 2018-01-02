import { TempAngularProjectPage } from './app.po';

describe('temp-angular-project App', function() {
  let page: TempAngularProjectPage;

  beforeEach(() => {
    page = new TempAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
