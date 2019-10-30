import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOverviewPageComponent } from './account-overview-page.component';

describe('AccountOverviewPageComponent', () => {
  let component: AccountOverviewPageComponent;
  let fixture: ComponentFixture<AccountOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
