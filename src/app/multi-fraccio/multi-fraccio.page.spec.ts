import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiFraccioPage } from './multi-fraccio.page';

describe('MultiFraccioPage', () => {
  let component: MultiFraccioPage;
  let fixture: ComponentFixture<MultiFraccioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiFraccioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
