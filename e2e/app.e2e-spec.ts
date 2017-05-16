import { GuessGamePage } from './app.po';

describe('guess-game App', () => {
  let page: GuessGamePage;

  beforeEach(() => {
    page = new GuessGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
