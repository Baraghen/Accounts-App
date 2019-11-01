import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGroupPageComponent } from './selected-group-page.component';

describe('SelectedGroupPageComponent', () => {
  let component: SelectedGroupPageComponent;
  let fixture: ComponentFixture<SelectedGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
