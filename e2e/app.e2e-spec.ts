import { CvbnPage } from './app.po';

describe('cvbn App', () => {
  let page: CvbnPage;

  beforeEach(() => {
    page = new CvbnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
