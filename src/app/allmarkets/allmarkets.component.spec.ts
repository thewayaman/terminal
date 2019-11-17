import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmarketsComponent } from './allmarkets.component';

describe('AllmarketsComponent', () => {
  let component: AllmarketsComponent;
  let fixture: ComponentFixture<AllmarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
