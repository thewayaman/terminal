import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpanelComponent } from './colorpanel.component';

describe('ColorpanelComponent', () => {
  let component: ColorpanelComponent;
  let fixture: ComponentFixture<ColorpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
