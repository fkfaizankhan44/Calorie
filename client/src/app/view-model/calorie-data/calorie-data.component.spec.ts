import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieDataComponent } from './calorie-data.component';

describe('CalorieDataComponent', () => {
  let component: CalorieDataComponent;
  let fixture: ComponentFixture<CalorieDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
