import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciVolcanoComponent } from './bici-volcano.component';

describe('BiciVolcanoComponent', () => {
  let component: BiciVolcanoComponent;
  let fixture: ComponentFixture<BiciVolcanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciVolcanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciVolcanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
