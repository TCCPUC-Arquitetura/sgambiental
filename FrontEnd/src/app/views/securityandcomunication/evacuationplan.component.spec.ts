import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationplanComponent } from './evacuationplan.component';

describe('EvacuationplanComponent', () => {
  let component: EvacuationplanComponent;
  let fixture: ComponentFixture<EvacuationplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
