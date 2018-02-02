import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgLeadersSpeakComponent } from './kpmg-leaders-speak.component';

describe('KpmgLeadersSpeakComponent', () => {
  let component: KpmgLeadersSpeakComponent;
  let fixture: ComponentFixture<KpmgLeadersSpeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgLeadersSpeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgLeadersSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
