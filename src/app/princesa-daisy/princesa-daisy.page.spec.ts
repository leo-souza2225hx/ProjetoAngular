import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincesaDaisyPage } from './princesa-daisy.page';

describe('PrincesaDaisyPage', () => {
  let component: PrincesaDaisyPage;
  let fixture: ComponentFixture<PrincesaDaisyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincesaDaisyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
