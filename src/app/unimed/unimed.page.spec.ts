import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnimedPage } from './unimed.page';

describe('UnimedPage', () => {
  let component: UnimedPage;
  let fixture: ComponentFixture<UnimedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnimedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
