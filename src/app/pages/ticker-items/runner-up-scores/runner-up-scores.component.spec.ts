import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerUpScoresComponent } from './runner-up-scores.component';

describe('RunnerUpScoresComponent', () => {
  let component: RunnerUpScoresComponent;
  let fixture: ComponentFixture<RunnerUpScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerUpScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerUpScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
