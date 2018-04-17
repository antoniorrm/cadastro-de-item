import { ProvapraticaPage } from './app.po';

describe('provapratica App', function() {
  let page: ProvapraticaPage;

  beforeEach(() => {
    page = new ProvapraticaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
