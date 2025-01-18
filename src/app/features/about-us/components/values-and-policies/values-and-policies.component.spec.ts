import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ValuesAndPoliciesComponent} from './values-and-policies.component';

describe('ValuesAndPoliciesComponent', () => {
  let component: ValuesAndPoliciesComponent;
  let fixture: ComponentFixture<ValuesAndPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesAndPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuesAndPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
