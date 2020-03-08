import { async, TestBed } from '@angular/core/testing';
import { AnimationElementsModule } from './animation-elements.module';

describe('AnimationElementsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimationElementsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnimationElementsModule).toBeDefined();
  });
});
