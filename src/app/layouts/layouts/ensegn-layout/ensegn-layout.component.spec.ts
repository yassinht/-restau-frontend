import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsegnLayoutComponent } from './ensegn-layout.component';

describe('EnsegnLayoutComponent', () => {
  let component: EnsegnLayoutComponent;
  let fixture: ComponentFixture<EnsegnLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsegnLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsegnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
