import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactorizarPage } from './factorizar.page';

describe('FactorizarPage', () => {
  let component: FactorizarPage;
  let fixture: ComponentFixture<FactorizarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactorizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
