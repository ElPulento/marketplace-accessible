import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuantesRaptorComponent } from './guantes-raptor.component';

describe('GuantesRaptorComponent', () => {
  let component: GuantesRaptorComponent;
  let fixture: ComponentFixture<GuantesRaptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuantesRaptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuantesRaptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
