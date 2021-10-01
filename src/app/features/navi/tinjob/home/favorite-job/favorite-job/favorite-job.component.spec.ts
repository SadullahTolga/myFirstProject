import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJobComponent } from './favorite-job.component';

describe('FavoriteJobComponent', () => {
  let component: FavoriteJobComponent;
  let fixture: ComponentFixture<FavoriteJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
