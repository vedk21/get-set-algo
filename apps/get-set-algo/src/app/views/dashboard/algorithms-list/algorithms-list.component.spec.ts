import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsListComponent } from './algorithms-list.component';

describe('AlgorithmsListComponent', () => {
  let component: AlgorithmsListComponent;
  let fixture: ComponentFixture<AlgorithmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
