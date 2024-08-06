import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumarestPage } from './sumarest.page';

describe('SumarestPage', () => {
  let component: SumarestPage;
  let fixture: ComponentFixture<SumarestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SumarestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
