import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelemetryPage } from './telemetry.page';

describe('TelemetryPage', () => {
  let component: TelemetryPage;
  let fixture: ComponentFixture<TelemetryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelemetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
