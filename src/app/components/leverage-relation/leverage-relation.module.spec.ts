import { LeverageRelationModule } from './leverage-relation.module';

describe('LeverageRelationModule', () => {
  let leverageRelationModule: LeverageRelationModule;

  beforeEach(() => {
    leverageRelationModule = new LeverageRelationModule();
  });

  it('should create an instance', () => {
    expect(leverageRelationModule).toBeTruthy();
  });
});
