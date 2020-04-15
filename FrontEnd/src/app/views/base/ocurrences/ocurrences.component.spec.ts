import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcurrencesComponent } from './ocurrences.component';

describe('OcurrencesComponent', () => {
  let component: OcurrencesComponent;
  let fixture: ComponentFixture<OcurrencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcurrencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcurrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
