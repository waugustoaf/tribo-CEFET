import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentEditGrupo08Page } from './payment-edit-grupo08.page';

describe('PaymentEditGrupo08Page', () => {
  let component: PaymentEditGrupo08Page;
  let fixture: ComponentFixture<PaymentEditGrupo08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentEditGrupo08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentEditGrupo08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
