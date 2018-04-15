import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningBuddyComponent } from './running-buddy.component';

describe('RunningBuddyComponent', () => {
  let component: RunningBuddyComponent;
  let fixture: ComponentFixture<RunningBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
