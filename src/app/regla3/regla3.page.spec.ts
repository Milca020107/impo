import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Regla3Page } from './regla3.page';

describe('Regla3Page', () => {
  let component: Regla3Page;
  let fixture: ComponentFixture<Regla3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Regla3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
