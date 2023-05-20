import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertinkerComponent } from './overtinker.component';

describe('OvertinkerComponent', () => {
  let component: OvertinkerComponent;
  let fixture: ComponentFixture<OvertinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertinkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
