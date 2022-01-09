import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeListGRUPO08Page } from './employee-list-grupo08.page';

describe('EmployeeListGRUPO08Page', () => {
  let component: EmployeeListGRUPO08Page;
  let fixture: ComponentFixture<EmployeeListGRUPO08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListGRUPO08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListGRUPO08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
