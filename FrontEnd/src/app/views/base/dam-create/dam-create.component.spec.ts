import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamCreateComponent } from './dam-create.component';

describe('DamCreateComponent', () => {
  let component: DamCreateComponent;
  let fixture: ComponentFixture<DamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
