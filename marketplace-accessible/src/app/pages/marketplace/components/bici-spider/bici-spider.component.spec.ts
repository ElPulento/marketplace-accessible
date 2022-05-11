import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciSpiderComponent } from './bici-spider.component';

describe('BiciSpiderComponent', () => {
  let component: BiciSpiderComponent;
  let fixture: ComponentFixture<BiciSpiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiciSpiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciSpiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
