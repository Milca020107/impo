import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimPage } from './prim.page';

describe('PrimPage', () => {
  let component: PrimPage;
  let fixture: ComponentFixture<PrimPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
