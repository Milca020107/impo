import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SistemaEcPage } from './sistema-ec.page';

describe('SistemaEcPage', () => {
  let component: SistemaEcPage;
  let fixture: ComponentFixture<SistemaEcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SistemaEcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
