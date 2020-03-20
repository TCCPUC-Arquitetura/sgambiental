import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningZoneDetailsComponent } from './mining-zone-details.component';

describe('MiningZoneDetailsComponent', () => {
  let component: MiningZoneDetailsComponent;
  let fixture: ComponentFixture<MiningZoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningZoneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
