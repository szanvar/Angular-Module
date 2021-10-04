import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousLinkComponent } from './marvellous-link.component';

describe('MarvellousLinkComponent', () => {
  let component: MarvellousLinkComponent;
  let fixture: ComponentFixture<MarvellousLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
