import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InversaPage } from './inversa.page';

describe('InversaPage', () => {
  let component: InversaPage;
  let fixture: ComponentFixture<InversaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
