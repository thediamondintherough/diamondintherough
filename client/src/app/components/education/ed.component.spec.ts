import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdComponent } from './ed.component';

describe('EdComponent', () => {
  let component: EdComponent;
  let fixture: ComponentFixture<EdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});