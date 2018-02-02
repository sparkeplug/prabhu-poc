import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgCaseStudiesComponent } from './kpmg-case-studies.component';

describe('KpmgCaseStudiesComponent', () => {
  let component: KpmgCaseStudiesComponent;
  let fixture: ComponentFixture<KpmgCaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgCaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
