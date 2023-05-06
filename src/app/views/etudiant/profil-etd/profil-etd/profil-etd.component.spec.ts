import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEtdComponent } from './profil-etd.component';

describe('ProfilEtdComponent', () => {
  let component: ProfilEtdComponent;
  let fixture: ComponentFixture<ProfilEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
