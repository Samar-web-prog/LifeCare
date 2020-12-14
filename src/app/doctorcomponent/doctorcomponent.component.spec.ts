import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorcomponentComponent } from './doctorcomponent.component';

describe('DoctorcomponentComponent', () => {
  let component: DoctorcomponentComponent;
  let fixture: ComponentFixture<DoctorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
