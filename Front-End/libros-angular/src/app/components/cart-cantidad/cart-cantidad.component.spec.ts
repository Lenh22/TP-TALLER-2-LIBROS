import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCantidadComponent } from './cart-cantidad.component';

describe('CartCantidadComponent', () => {
  let component: CartCantidadComponent;
  let fixture: ComponentFixture<CartCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCantidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
