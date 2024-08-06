import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightsPage } from './rights.page';

describe('RightsPage', () => {
  let component: RightsPage;
  let fixture: ComponentFixture<RightsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
