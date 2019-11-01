import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpGroupPickerComponent } from './pop-up-group-picker.component';

describe('PopUpGroupPickerComponent', () => {
  let component: PopUpGroupPickerComponent;
  let fixture: ComponentFixture<PopUpGroupPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpGroupPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpGroupPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
