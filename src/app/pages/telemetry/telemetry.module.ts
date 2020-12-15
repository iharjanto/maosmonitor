import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryPageRoutingModule } from './telemetry-routing.module';

import { TelemetryPage } from './telemetry.page';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryPageRoutingModule,
    HighchartsChartModule
    
  ],
  declarations: [TelemetryPage],
  providers: [DatePicker]

})
export class TelemetryPageModule {}
