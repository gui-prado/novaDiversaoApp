import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GotPage } from './got.page';

describe('GotPage', () => {
  let component: GotPage;
  let fixture: ComponentFixture<GotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
