import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptioncomponentComponent } from './inscriptioncomponent.component';

describe('InscriptioncomponentComponent', () => {
  let component: InscriptioncomponentComponent;
  let fixture: ComponentFixture<InscriptioncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptioncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
