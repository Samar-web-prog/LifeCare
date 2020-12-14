import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvoususerComponent } from './rendezvoususer.component';

describe('RendezvoususerComponent', () => {
  let component: RendezvoususerComponent;
  let fixture: ComponentFixture<RendezvoususerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvoususerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvoususerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
