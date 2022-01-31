import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseListGrupo08Page } from './exercise-list-grupo08.page';

describe('ExerciseListGrupo08Page', () => {
  let component: ExerciseListGrupo08Page;
  let fixture: ComponentFixture<ExerciseListGrupo08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseListGrupo08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseListGrupo08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
