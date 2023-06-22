import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincesaPeachPage } from './princesa-peach.page';

describe('PrincesaPeachPage', () => {
  let component: PrincesaPeachPage;
  let fixture: ComponentFixture<PrincesaPeachPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincesaPeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
