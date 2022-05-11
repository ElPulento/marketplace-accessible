import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciOceanComponent } from './bici-ocean.component';

describe('BiciOceanComponent', () => {
  let component: BiciOceanComponent;
  let fixture: ComponentFixture<BiciOceanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciOceanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciOceanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
