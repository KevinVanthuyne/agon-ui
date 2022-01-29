import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerItemContainerComponent } from './ticker-item-container.component';

describe('TickerItemContainerComponent', () => {
  let component: TickerItemContainerComponent;
  let fixture: ComponentFixture<TickerItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerItemContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
