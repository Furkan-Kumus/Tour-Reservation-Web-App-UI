import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpagesComponent } from './adminpages.component';

describe('AdminpagesComponent', () => {
  let component: AdminpagesComponent;
  let fixture: ComponentFixture<AdminpagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpagesComponent]
    });
    fixture = TestBed.createComponent(AdminpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
