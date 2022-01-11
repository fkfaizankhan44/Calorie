import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetValueComponent } from './met-value.component';

describe('MetValueComponent', () => {
  let component: MetValueComponent;
  let fixture: ComponentFixture<MetValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
