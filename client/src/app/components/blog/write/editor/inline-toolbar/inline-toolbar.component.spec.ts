import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionScopeComponent } from './inline-toolbar.component';

describe('ActionScopeComponent', () => {
  let component: ActionScopeComponent;
  let fixture: ComponentFixture<ActionScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
