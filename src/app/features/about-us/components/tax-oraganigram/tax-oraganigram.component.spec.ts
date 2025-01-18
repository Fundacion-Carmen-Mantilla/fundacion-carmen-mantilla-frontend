import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TaxOraganigramComponent} from './tax-oraganigram.component';

describe('TaxOraganigramComponent', () => {
  let component: TaxOraganigramComponent;
  let fixture: ComponentFixture<TaxOraganigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxOraganigramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxOraganigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
