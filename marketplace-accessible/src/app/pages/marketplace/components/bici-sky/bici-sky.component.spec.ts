import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciSkyComponent } from './bici-sky.component';

describe('BiciSkyComponent', () => {
  let component: BiciSkyComponent;
  let fixture: ComponentFixture<BiciSkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciSkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
