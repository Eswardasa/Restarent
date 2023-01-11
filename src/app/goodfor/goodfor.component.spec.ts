import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodforComponent } from './goodfor.component';

describe('GoodforComponent', () => {
  let component: GoodforComponent;
  let fixture: ComponentFixture<GoodforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
