import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmTechniquesComponent } from './algorithm-techniques.component';

describe('AlgorithmTechniquesComponent', () => {
  let component: AlgorithmTechniquesComponent;
  let fixture: ComponentFixture<AlgorithmTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
