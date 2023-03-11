import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDivisionPageComponent } from './new-division-page.component';

describe('NewDivisionPageComponent', () => {
  let component: NewDivisionPageComponent;
  let fixture: ComponentFixture<NewDivisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDivisionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDivisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
