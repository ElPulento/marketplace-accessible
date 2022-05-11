import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciRustyComponent } from './bici-rusty.component';

describe('BiciRustyComponent', () => {
  let component: BiciRustyComponent;
  let fixture: ComponentFixture<BiciRustyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciRustyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciRustyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
