import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCompComponent } from './comp-comp.component';

describe('CompCompComponent', () => {
  let component: CompCompComponent;
  let fixture: ComponentFixture<CompCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
