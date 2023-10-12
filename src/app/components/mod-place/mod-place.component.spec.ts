import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPlaceComponent } from './mod-place.component';

describe('ModPlaceComponent', () => {
  let component: ModPlaceComponent;
  let fixture: ComponentFixture<ModPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
