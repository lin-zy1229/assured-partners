import { BlueprintProcessModule } from './blueprint-process.module';

describe('BlueprintProcessModule', () => {
  let blueprintProcessModule: BlueprintProcessModule;

  beforeEach(() => {
    blueprintProcessModule = new BlueprintProcessModule();
  });

  it('should create an instance', () => {
    expect(blueprintProcessModule).toBeTruthy();
  });
});
