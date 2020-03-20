import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningZoneCreateComponent } from './mining-zone-create.component';

describe('MiningZoneCreateComponent', () => {
  let component: MiningZoneCreateComponent;
  let fixture: ComponentFixture<MiningZoneCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningZoneCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningZoneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
