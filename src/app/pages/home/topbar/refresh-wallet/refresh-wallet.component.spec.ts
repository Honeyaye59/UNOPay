import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshWalletComponent } from './refresh-wallet.component';

describe('RefreshWalletComponent', () => {
  let component: RefreshWalletComponent;
  let fixture: ComponentFixture<RefreshWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
