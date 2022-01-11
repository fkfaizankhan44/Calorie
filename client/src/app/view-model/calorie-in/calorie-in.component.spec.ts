import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieInComponent } from './calorie-in.component';

describe('CalorieInComponent', () => {
  let component: CalorieInComponent;
  let fixture: ComponentFixture<CalorieInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
