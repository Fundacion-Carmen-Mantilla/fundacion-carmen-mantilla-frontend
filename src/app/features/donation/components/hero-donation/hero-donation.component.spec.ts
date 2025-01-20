import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDonationComponent } from './hero-donation.component';

describe('HeroDonationComponent', () => {
  let component: HeroDonationComponent;
  let fixture: ComponentFixture<HeroDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDonationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
