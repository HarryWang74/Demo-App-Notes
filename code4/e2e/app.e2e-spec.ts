import { Code4Page } from './app.po';

describe('code4 App', () => {
  let page: Code4Page;

  beforeEach(() => {
    page = new Code4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
