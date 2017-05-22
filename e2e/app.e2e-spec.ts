import { HangarmusicPage } from './app.po';

describe('hangarmusic App', () => {
  let page: HangarmusicPage;

  beforeEach(() => {
    page = new HangarmusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
