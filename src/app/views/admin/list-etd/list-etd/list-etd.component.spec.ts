import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtdComponent } from './list-etd.component';

describe('ListEtdComponent', () => {
  let component: ListEtdComponent;
  let fixture: ComponentFixture<ListEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
