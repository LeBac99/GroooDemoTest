import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpasswordComponent } from './enterpassword.component';

describe('EnterpasswordComponent', () => {
  let component: EnterpasswordComponent;
  let fixture: ComponentFixture<EnterpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
