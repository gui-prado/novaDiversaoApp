import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DragonBallPage } from './dragon-ball.page';

describe('DragonBallPage', () => {
  let component: DragonBallPage;
  let fixture: ComponentFixture<DragonBallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonBallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DragonBallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
