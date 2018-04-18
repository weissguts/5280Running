import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFinderComponent } from './friend-finder.component';

describe('FriendFinderComponent', () => {
  let component: FriendFinderComponent;
  let fixture: ComponentFixture<FriendFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
