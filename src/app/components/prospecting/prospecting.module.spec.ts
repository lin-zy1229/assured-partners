import { ProspectingModule } from './prospecting.module';

describe('ProspectingModule', () => {
  let prospectingModule: ProspectingModule;

  beforeEach(() => {
    prospectingModule = new ProspectingModule();
  });

  it('should create an instance', () => {
    expect(prospectingModule).toBeTruthy();
  });
});
