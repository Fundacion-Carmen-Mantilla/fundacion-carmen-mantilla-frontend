import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LastPostHomeComponent} from './last-post-home.component';

describe('LastPostHomeComponent', () => {
  let component: LastPostHomeComponent;
  let fixture: ComponentFixture<LastPostHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPostHomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LastPostHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
