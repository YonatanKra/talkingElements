import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthElementSpeakingComponent } from './sixth-element-speaking.component';

describe('SixthElementSpeakingComponent', () => {
  let component: SixthElementSpeakingComponent;
  let fixture: ComponentFixture<SixthElementSpeakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthElementSpeakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthElementSpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
