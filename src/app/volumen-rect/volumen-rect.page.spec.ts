import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumenRectPage } from './volumen-rect.page';

describe('VolumenRectPage', () => {
  let component: VolumenRectPage;
  let fixture: ComponentFixture<VolumenRectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolumenRectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
