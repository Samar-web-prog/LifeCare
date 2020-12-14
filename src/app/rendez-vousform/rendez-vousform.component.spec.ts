import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousformComponent } from './rendez-vousform.component';

describe('RendezVousformComponent', () => {
  let component: RendezVousformComponent;
  let fixture: ComponentFixture<RendezVousformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
