import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnguloPage } from './angulo.page';

describe('AnguloPage', () => {
  let component: AnguloPage;
  let fixture: ComponentFixture<AnguloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnguloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
