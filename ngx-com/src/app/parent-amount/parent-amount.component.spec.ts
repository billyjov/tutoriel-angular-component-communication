import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAmountComponent } from './parent-amount.component';

describe('ParentAmountComponent', () => {
  let component: ParentAmountComponent;
  let fixture: ComponentFixture<ParentAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
