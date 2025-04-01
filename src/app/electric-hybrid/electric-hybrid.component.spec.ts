import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricHybridComponent } from './electric-hybrid.component';

describe('ElectricHybridComponent', () => {
  let component: ElectricHybridComponent;
  let fixture: ComponentFixture<ElectricHybridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricHybridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricHybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
