import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationAccountInformationComponent } from './donation-account-information.component';

describe('DonationAccountInformationComponent', () => {
  let component: DonationAccountInformationComponent;
  let fixture: ComponentFixture<DonationAccountInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationAccountInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
