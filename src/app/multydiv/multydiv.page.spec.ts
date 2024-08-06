import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultydivPage } from './multydiv.page';

describe('MultydivPage', () => {
  let component: MultydivPage;
  let fixture: ComponentFixture<MultydivPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultydivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
