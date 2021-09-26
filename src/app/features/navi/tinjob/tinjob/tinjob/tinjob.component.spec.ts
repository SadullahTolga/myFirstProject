import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinjobComponent } from './tinjob.component';

describe('TinjobComponent', () => {
  let component: TinjobComponent;
  let fixture: ComponentFixture<TinjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
