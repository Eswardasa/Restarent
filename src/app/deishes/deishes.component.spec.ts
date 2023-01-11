import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeishesComponent } from './deishes.component';

describe('DeishesComponent', () => {
  let component: DeishesComponent;
  let fixture: ComponentFixture<DeishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
