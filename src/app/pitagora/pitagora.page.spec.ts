import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PitagoraPage } from './pitagora.page';

describe('PitagoraPage', () => {
  let component: PitagoraPage;
  let fixture: ComponentFixture<PitagoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PitagoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
