import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJAComponent } from './favorite-ja.component';

describe('FavoriteJAComponent', () => {
  let component: FavoriteJAComponent;
  let fixture: ComponentFixture<FavoriteJAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteJAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
