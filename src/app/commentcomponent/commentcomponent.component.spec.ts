import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcomponentComponent } from './commentcomponent.component';

describe('CommentcomponentComponent', () => {
  let component: CommentcomponentComponent;
  let fixture: ComponentFixture<CommentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
