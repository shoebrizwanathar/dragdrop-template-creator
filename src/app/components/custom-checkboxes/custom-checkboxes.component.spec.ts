import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxesComponent } from './custom-checkboxes.component';

describe('CustomCheckboxesComponent', () => {
  let component: CustomCheckboxesComponent;
  let fixture: ComponentFixture<CustomCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
