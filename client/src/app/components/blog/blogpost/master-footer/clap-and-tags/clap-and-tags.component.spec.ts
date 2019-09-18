import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapAndTagsComponent } from './clap-and-tags.component';

describe('ClapAndTagsComponent', () => {
  let component: ClapAndTagsComponent;
  let fixture: ComponentFixture<ClapAndTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClapAndTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClapAndTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
