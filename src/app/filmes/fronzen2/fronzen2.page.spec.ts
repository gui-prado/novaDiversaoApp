import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fronzen2Page } from './fronzen2.page';

describe('Fronzen2Page', () => {
  let component: Fronzen2Page;
  let fixture: ComponentFixture<Fronzen2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fronzen2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fronzen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
