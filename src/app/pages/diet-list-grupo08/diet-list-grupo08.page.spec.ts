import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietListGRUPO08Page } from './diet-list-grupo08.page';

describe('DietListGRUPO08Page', () => {
  let component: DietListGRUPO08Page;
  let fixture: ComponentFixture<DietListGRUPO08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DietListGRUPO08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietListGRUPO08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
