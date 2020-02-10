import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ZonaMineracaoComponent } from "./zona-mineracao.component";

describe("ZonaMineracaoComponent", () => {
  let component: ZonaMineracaoComponent;
  let fixture: ComponentFixture<ZonaMineracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaMineracaoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaMineracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
