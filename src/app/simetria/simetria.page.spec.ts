import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimetriaPage } from './simetria.page';

describe('SimetriaPage', () => {
  let component: SimetriaPage;
  let fixture: ComponentFixture<SimetriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimetriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
