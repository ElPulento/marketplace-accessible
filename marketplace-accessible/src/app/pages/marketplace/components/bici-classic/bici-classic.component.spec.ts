import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciClassicComponent } from './bici-classic.component';

describe('BiciClassicComponent', () => {
  let component: BiciClassicComponent;
  let fixture: ComponentFixture<BiciClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
