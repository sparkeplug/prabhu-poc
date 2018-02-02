import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpmgWhatWeDoComponent } from './kpmg-what-we-do.component';

describe('KpmgWhatWeDoComponent', () => {
  let component: KpmgWhatWeDoComponent;
  let fixture: ComponentFixture<KpmgWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpmgWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpmgWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
