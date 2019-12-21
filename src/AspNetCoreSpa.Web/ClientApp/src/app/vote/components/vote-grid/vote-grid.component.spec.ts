import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteGridComponent } from './vote-grid.component';

describe('VoteGridComponent', () => {
  let component: VoteGridComponent;
  let fixture: ComponentFixture<VoteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
