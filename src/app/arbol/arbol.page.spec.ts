import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbolPage } from './arbol.page';

describe('ArbolPage', () => {
  let component: ArbolPage;
  let fixture: ComponentFixture<ArbolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
