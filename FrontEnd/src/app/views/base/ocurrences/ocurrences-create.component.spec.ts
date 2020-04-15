import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcurrencesCreateComponent } from './ocurrences-create.component';

describe('OcurrencesCreateComponent', () => {
  let component: OcurrencesCreateComponent;
  let fixture: ComponentFixture<OcurrencesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcurrencesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcurrencesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
