import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamePage } from './fame.page';

describe('FamePage', () => {
  let component: FamePage;
  let fixture: ComponentFixture<FamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
