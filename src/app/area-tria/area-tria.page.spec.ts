import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaTriaPage } from './area-tria.page';

describe('AreaTriaPage', () => {
  let component: AreaTriaPage;
  let fixture: ComponentFixture<AreaTriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AreaTriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
