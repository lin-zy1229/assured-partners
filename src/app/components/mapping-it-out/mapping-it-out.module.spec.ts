import { MappingItOutModule } from './mapping-it-out.module';

describe('MappingItOutModule', () => {
  let mappingItOutModule: MappingItOutModule;

  beforeEach(() => {
    mappingItOutModule = new MappingItOutModule();
  });

  it('should create an instance', () => {
    expect(mappingItOutModule).toBeTruthy();
  });
});
