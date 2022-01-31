import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseEditGrupo08Page } from './exercise-edit-grupo08.page';

describe('ExerciseEditGrupo08Page', () => {
  let component: ExerciseEditGrupo08Page;
  let fixture: ComponentFixture<ExerciseEditGrupo08Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseEditGrupo08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseEditGrupo08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
