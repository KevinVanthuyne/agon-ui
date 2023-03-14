import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionChampionComponent } from './division-champion.component';

describe('DivisionChampionComponent', () => {
  let component: DivisionChampionComponent;
  let fixture: ComponentFixture<DivisionChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionChampionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
