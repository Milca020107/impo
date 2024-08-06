import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumnatPage } from './numnat.page';

describe('NumnatPage', () => {
  let component: NumnatPage;
  let fixture: ComponentFixture<NumnatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumnatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
