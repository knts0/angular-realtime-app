import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSideComponent } from './operator-side.component';

describe('OperatorSideComponent', () => {
  let component: OperatorSideComponent;
  let fixture: ComponentFixture<OperatorSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
