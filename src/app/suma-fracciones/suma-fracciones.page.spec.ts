import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumaFraccionesPage } from './suma-fracciones.page';

describe('SumaFraccionesPage', () => {
  let component: SumaFraccionesPage;
  let fixture: ComponentFixture<SumaFraccionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SumaFraccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
