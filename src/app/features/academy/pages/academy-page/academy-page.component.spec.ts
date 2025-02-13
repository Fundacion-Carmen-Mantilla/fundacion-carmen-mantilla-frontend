import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcademyPageComponent} from './academy-page.component';

describe('AcademyPageComponent', () => {
  let component: AcademyPageComponent;
  let fixture: ComponentFixture<AcademyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcademyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
