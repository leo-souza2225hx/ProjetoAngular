import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiddyKongPage } from './diddy-kong.page';

describe('DiddyKongPage', () => {
  let component: DiddyKongPage;
  let fixture: ComponentFixture<DiddyKongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiddyKongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
