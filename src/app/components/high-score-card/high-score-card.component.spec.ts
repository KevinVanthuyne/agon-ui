import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreCardComponent } from './high-score-card.component';

describe('HighScoreCardComponent', () => {
  let component: HighScoreCardComponent;
  let fixture: ComponentFixture<HighScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
