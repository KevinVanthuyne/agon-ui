import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeaderImageComponent } from './game-header-image.component';

describe('GameHeaderImageComponent', () => {
  let component: GameHeaderImageComponent;
  let fixture: ComponentFixture<GameHeaderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHeaderImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
