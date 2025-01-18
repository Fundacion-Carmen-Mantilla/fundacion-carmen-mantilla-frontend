import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InsertButtonComponent} from './insert-button.component';

describe('InsertButtonComponent', () => {
  let component: InsertButtonComponent;
  let fixture: ComponentFixture<InsertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
