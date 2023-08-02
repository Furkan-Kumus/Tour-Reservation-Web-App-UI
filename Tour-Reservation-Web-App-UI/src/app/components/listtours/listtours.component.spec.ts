import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtoursComponent } from './listtours.component';

describe('ListtoursComponent', () => {
  let component: ListtoursComponent;
  let fixture: ComponentFixture<ListtoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListtoursComponent]
    });
    fixture = TestBed.createComponent(ListtoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
