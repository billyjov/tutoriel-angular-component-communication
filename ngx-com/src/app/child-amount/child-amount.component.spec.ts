import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAmountComponent } from './child-amount.component';

describe('ChildAmountComponent', () => {
  let component: ChildAmountComponent;
  let fixture: ComponentFixture<ChildAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
