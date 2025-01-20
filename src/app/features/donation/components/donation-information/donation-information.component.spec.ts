import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationInformationComponent } from './donation-information.component';

describe('DonationInformationComponent', () => {
  let component: DonationInformationComponent;
  let fixture: ComponentFixture<DonationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
