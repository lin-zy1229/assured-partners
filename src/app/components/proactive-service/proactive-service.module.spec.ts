import { ProactiveServiceModule } from './proactive-service.module';

describe('ProactiveServiceModule', () => {
  let proactiveServiceModule: ProactiveServiceModule;

  beforeEach(() => {
    proactiveServiceModule = new ProactiveServiceModule();
  });

  it('should create an instance', () => {
    expect(proactiveServiceModule).toBeTruthy();
  });
});
