import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinPrizesComponent } from './win-prizes.component';

describe('WinPrizesComponent', () => {
  let component: WinPrizesComponent;
  let fixture: ComponentFixture<WinPrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinPrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
