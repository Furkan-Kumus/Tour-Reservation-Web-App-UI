import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportComponent } from './airport.component';

describe('AirportComponent', () => {
  let component: AirportComponent;
  let fixture: ComponentFixture<AirportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportComponent]
    });
    fixture = TestBed.createComponent(AirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
