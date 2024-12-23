import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGamesPageComponent } from './admin-games-page.component';

describe('GamesPageComponent', () => {
  let component: AdminGamesPageComponent;
  let fixture: ComponentFixture<AdminGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGamesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
