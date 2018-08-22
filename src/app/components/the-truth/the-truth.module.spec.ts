import { TheTruthModule } from './the-truth.module';

describe('TheTruthModule', () => {
  let theTruthModule: TheTruthModule;

  beforeEach(() => {
    theTruthModule = new TheTruthModule();
  });

  it('should create an instance', () => {
    expect(theTruthModule).toBeTruthy();
  });
});
