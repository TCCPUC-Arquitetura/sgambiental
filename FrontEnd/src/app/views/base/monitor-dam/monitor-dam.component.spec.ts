import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDamComponent } from './monitor-dam.component';

describe('MonitorDamComponent', () => {
  let component: MonitorDamComponent;
  let fixture: ComponentFixture<MonitorDamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorDamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorDamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
