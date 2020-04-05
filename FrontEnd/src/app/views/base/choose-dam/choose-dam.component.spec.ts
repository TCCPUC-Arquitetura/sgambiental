import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDamComponent } from './choose-dam.component';

describe('ChooseDamComponent', () => {
  let component: ChooseDamComponent;
  let fixture: ComponentFixture<ChooseDamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
