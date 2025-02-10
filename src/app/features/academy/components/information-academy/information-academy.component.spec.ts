import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InformationAcademyComponent} from './information-academy.component';

describe('InformationAcademyComponent', () => {
  let component: InformationAcademyComponent;
  let fixture: ComponentFixture<InformationAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationAcademyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InformationAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
