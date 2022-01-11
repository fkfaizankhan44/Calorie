import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetValueDataComponent } from './met-value-data.component';

describe('MetValueDataComponent', () => {
  let component: MetValueDataComponent;
  let fixture: ComponentFixture<MetValueDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetValueDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetValueDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
