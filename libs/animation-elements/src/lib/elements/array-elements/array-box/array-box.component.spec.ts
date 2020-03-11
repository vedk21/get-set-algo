import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBoxComponent } from './array-box.component';

describe('ArrayBoxComponent', () => {
  let component: ArrayBoxComponent;
  let fixture: ComponentFixture<ArrayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
