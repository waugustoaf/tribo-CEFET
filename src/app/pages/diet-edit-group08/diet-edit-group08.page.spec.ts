import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietEditGROUP08Page } from './diet-edit-group08.page';

describe('DietEditGROUP08Page', () => {
  let component: DietEditGROUP08Page;
  let fixture: ComponentFixture<DietEditGROUP08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DietEditGROUP08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietEditGROUP08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
