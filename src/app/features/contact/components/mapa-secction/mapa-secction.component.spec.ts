import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSecctionComponent } from './mapa-secction.component';

describe('MapaSecctionComponent', () => {
  let component: MapaSecctionComponent;
  let fixture: ComponentFixture<MapaSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaSecctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
