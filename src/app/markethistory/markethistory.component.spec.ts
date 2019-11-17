import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkethistoryComponent } from './markethistory.component';

describe('MarkethistoryComponent', () => {
  let component: MarkethistoryComponent;
  let fixture: ComponentFixture<MarkethistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkethistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
