import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShyguyPage } from './shyguy.page';

describe('ShyguyPage', () => {
  let component: ShyguyPage;
  let fixture: ComponentFixture<ShyguyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShyguyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
