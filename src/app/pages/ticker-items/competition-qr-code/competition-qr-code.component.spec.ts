import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionQrCodeComponent } from './competition-qr-code.component';

describe('CompetitionQrCodeComponent', () => {
  let component: CompetitionQrCodeComponent;
  let fixture: ComponentFixture<CompetitionQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
