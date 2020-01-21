import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinmenComponent } from './kinmen.component';

describe('KinmenComponent', () => {
  let component: KinmenComponent;
  let fixture: ComponentFixture<KinmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
