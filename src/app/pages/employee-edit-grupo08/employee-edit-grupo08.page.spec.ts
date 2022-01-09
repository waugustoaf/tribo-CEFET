import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeEditGRUPO08Page } from './employee-edit-grupo08.page';

describe('EmployeeEditGRUPO08Page', () => {
  let component: EmployeeEditGRUPO08Page;
  let fixture: ComponentFixture<EmployeeEditGRUPO08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditGRUPO08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeEditGRUPO08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
