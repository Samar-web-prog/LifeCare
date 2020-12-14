import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordetailscomponentComponent } from './doctordetailscomponent.component';

describe('DoctordetailscomponentComponent', () => {
  let component: DoctordetailscomponentComponent;
  let fixture: ComponentFixture<DoctordetailscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctordetailscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
