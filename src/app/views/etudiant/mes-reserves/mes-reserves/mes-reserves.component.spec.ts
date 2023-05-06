import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReservesComponent } from './mes-reserves.component';

describe('MesReservesComponent', () => {
  let component: MesReservesComponent;
  let fixture: ComponentFixture<MesReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesReservesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
