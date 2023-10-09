import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMapComponent } from './place-map.component';

describe('PlaceMapComponent', () => {
  let component: PlaceMapComponent;
  let fixture: ComponentFixture<PlaceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
