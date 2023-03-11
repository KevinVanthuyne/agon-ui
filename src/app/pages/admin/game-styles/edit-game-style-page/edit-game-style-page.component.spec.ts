import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameStylePageComponent } from './edit-game-style-page.component';

describe('EditGameStylePageComponent', () => {
  let component: EditGameStylePageComponent;
  let fixture: ComponentFixture<EditGameStylePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameStylePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGameStylePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
