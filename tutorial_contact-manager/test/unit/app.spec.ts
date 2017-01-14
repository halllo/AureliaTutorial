import {App} from '../../src/app';

class RouterStub {
  routes;
  
  configure(handler) {
    handler(this);
  }
  
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut, mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App(null);
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Contacts');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: '', moduleId: 'no-selection', title: 'Select' });
  });

  it('should have a contacts route', () => {
     expect(sut.router.routes).toContain({ route: 'contacts/:id', name: 'contacts', moduleId: 'contact-detail' });
  });
});
