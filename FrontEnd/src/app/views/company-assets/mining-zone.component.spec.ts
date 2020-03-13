import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningZoneComponent } from './mining-zone.component';

describe('MiningZoneComponent', () => {
  let component: MiningZoneComponent;
  let fixture: ComponentFixture<MiningZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
