import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartesianoPage } from './cartesiano.page';

describe('CartesianoPage', () => {
  let component: CartesianoPage;
  let fixture: ComponentFixture<CartesianoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartesianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
