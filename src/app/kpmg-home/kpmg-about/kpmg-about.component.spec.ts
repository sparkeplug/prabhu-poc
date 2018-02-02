import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgAboutComponent } from './kpmg-about.component';

describe('KpmgAboutComponent', () => {
  let component: KpmgAboutComponent;
  let fixture: ComponentFixture<KpmgAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
