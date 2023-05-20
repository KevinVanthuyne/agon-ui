import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerUpsComponent } from './runner-ups.component';

describe('RunnerUpsComponent', () => {
  let component: RunnerUpsComponent;
  let fixture: ComponentFixture<RunnerUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerUpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunnerUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
