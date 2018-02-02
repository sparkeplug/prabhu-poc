import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgLoginComponent } from './kpmg-login.component';

describe('KpmgLoginComponent', () => {
  let component: KpmgLoginComponent;
  let fixture: ComponentFixture<KpmgLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
