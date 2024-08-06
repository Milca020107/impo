import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolCilPage } from './vol-cil.page';

describe('VolCilPage', () => {
  let component: VolCilPage;
  let fixture: ComponentFixture<VolCilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolCilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
