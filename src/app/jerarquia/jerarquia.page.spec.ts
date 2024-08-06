import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JerarquiaPage } from './jerarquia.page';

describe('JerarquiaPage', () => {
  let component: JerarquiaPage;
  let fixture: ComponentFixture<JerarquiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JerarquiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
