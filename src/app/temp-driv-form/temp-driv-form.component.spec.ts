import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivFormComponent } from './temp-driv-form.component';

describe('TempDrivFormComponent', () => {
  let component: TempDrivFormComponent;
  let fixture: ComponentFixture<TempDrivFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDrivFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempDrivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
