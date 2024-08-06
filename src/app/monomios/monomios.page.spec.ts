import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonomiosPage } from './monomios.page';

describe('MonomiosPage', () => {
  let component: MonomiosPage;
  let fixture: ComponentFixture<MonomiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonomiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
