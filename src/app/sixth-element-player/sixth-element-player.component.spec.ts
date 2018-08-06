import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthElementPlayerComponent } from './sixth-element-player.component';

describe('SixthElementPlayerComponent', () => {
  let component: SixthElementPlayerComponent;
  let fixture: ComponentFixture<SixthElementPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthElementPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthElementPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
