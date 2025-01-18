import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SocialObjectActionLinesComponent} from './social-object-action-lines.component';

describe('SocialObjectActionLinesComponent', () => {
  let component: SocialObjectActionLinesComponent;
  let fixture: ComponentFixture<SocialObjectActionLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialObjectActionLinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialObjectActionLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
