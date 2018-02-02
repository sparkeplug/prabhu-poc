import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgEngagementsComponent } from './kpmg-engagements.component';

describe('KpmgEngagementsComponent', () => {
  let component: KpmgEngagementsComponent;
  let fixture: ComponentFixture<KpmgEngagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgEngagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
