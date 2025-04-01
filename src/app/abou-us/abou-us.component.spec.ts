import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouUsComponent } from './abou-us.component';

describe('AbouUsComponent', () => {
  let component: AbouUsComponent;
  let fixture: ComponentFixture<AbouUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
