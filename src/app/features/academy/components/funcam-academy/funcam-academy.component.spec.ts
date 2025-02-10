import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FuncamAcademyComponent} from './funcam-academy.component';

describe('FuncamAcademyComponent', () => {
  let component: FuncamAcademyComponent;
  let fixture: ComponentFixture<FuncamAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncamAcademyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FuncamAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
