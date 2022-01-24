import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreToBeatComponent } from './score-to-beat.component';

describe('ScoreToBeatComponent', () => {
  let component: ScoreToBeatComponent;
  let fixture: ComponentFixture<ScoreToBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreToBeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreToBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
