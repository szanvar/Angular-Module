import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosystemLinkComponent } from './infosystem-link.component';

describe('InfosystemLinkComponent', () => {
  let component: InfosystemLinkComponent;
  let fixture: ComponentFixture<InfosystemLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosystemLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosystemLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
