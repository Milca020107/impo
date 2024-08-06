import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumsignPage } from './numsign.page';

describe('NumsignPage', () => {
  let component: NumsignPage;
  let fixture: ComponentFixture<NumsignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumsignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
