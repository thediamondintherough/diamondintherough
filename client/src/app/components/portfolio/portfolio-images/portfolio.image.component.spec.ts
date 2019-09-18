import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import portImgContainerComponent from './portfolio.image.component';

describe('portImgContainerComponent', () => {
  let component: portImgContainerComponent;
  let fixture: ComponentFixture<portImgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ portImgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(portImgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});