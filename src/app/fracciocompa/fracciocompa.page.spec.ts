import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FracciocompaPage } from './fracciocompa.page';

describe('FracciocompaPage', () => {
  let component: FracciocompaPage;
  let fixture: ComponentFixture<FracciocompaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FracciocompaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
