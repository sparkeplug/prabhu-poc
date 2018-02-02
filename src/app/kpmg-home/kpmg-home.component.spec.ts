import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgHomeComponent } from './kpmg-home.component';

describe('KpmgHomeComponent', () => {
  let component: KpmgHomeComponent;
  let fixture: ComponentFixture<KpmgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
