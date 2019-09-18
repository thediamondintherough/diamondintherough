import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaToolTipComponent } from './media-tool-tip.component';

describe('MediaToolTipComponent', () => {
  let component: MediaToolTipComponent;
  let fixture: ComponentFixture<MediaToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
