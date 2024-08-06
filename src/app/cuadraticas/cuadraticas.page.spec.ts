import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuadraticasPage } from './cuadraticas.page';

describe('CuadraticasPage', () => {
  let component: CuadraticasPage;
  let fixture: ComponentFixture<CuadraticasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuadraticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
