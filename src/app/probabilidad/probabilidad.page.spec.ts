import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProbabilidadPage } from './probabilidad.page';

describe('ProbabilidadPage', () => {
  let component: ProbabilidadPage;
  let fixture: ComponentFixture<ProbabilidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProbabilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
