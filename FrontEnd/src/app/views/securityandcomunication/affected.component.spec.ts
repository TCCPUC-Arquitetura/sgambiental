import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedComponent } from './affected.component';

describe('AffectedComponent', () => {
  let component: AffectedComponent;
  let fixture: ComponentFixture<AffectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
