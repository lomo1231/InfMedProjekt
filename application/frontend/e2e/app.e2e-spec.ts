import { HeartbeatFrontPage } from './app.po';

describe('heartbeat-front App', function() {
  let page: HeartbeatFrontPage;

  beforeEach(() => {
    page = new HeartbeatFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
