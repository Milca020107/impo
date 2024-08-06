import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictogramaPage } from './pictograma.page';

describe('PictogramaPage', () => {
  let component: PictogramaPage;
  let fixture: ComponentFixture<PictogramaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PictogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
