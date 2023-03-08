import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionColumnsComponent } from './division-columns.component';

describe('DivisionColumnsComponent', () => {
  let component: DivisionColumnsComponent;
  let fixture: ComponentFixture<DivisionColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivisionColumnsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
