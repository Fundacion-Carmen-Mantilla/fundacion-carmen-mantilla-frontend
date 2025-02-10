import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LastNewsHomeComponent} from './last-news-home.component';

describe('LastNewsHomeComponent', () => {
  let component: LastNewsHomeComponent;
  let fixture: ComponentFixture<LastNewsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastNewsHomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LastNewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
