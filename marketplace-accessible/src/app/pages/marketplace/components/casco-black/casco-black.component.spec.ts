import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascoBlackComponent } from './casco-black.component';

describe('CascoBlackComponent', () => {
  let component: CascoBlackComponent;
  let fixture: ComponentFixture<CascoBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascoBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascoBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
