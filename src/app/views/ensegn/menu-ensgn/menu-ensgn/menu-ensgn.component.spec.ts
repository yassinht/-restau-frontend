import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnsgnComponent } from './menu-ensgn.component';

describe('MenuEnsgnComponent', () => {
  let component: MenuEnsgnComponent;
  let fixture: ComponentFixture<MenuEnsgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEnsgnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEnsgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
