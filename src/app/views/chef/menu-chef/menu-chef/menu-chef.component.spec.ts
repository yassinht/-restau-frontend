import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChefComponent } from './menu-chef.component';

describe('MenuChefComponent', () => {
  let component: MenuChefComponent;
  let fixture: ComponentFixture<MenuChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
