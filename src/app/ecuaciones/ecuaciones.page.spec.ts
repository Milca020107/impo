import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcuacionesPage } from './ecuaciones.page';

describe('EcuacionesPage', () => {
  let component: EcuacionesPage;
  let fixture: ComponentFixture<EcuacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EcuacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
