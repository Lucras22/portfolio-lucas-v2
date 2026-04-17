import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesisHitechComponent } from './genesis-hitech.component';

describe('GenesisHitechComponent', () => {
  let component: GenesisHitechComponent;
  let fixture: ComponentFixture<GenesisHitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenesisHitechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenesisHitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
