import { Component, OnInit } from '@angular/core';
import { FbsService } from 'src/app/service/fbs.service';

import * as Highcharts from 'highcharts';
import { DatePicker } from '@ionic-native/date-picker/ngx';


@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.page.html',
  styleUrls: ['./telemetry.page.scss'],
})
export class TelemetryPage implements OnInit {
  deviceList =[];
  sensorList:any;
  selectedDate:String;
  selectedSensor:string;
  telemetry = [];
  Highcharts : typeof Highcharts = Highcharts;
  chartOptions : Highcharts.Options;
  constructor(
    private fbservice: FbsService,
    private datePicker: DatePicker,
    
  ) { }

  ngOnInit() {
    this.fbservice.getPlant().subscribe( (data) => {
      this.deviceList = data.map( e => {
        return  {
          id: e.payload.doc.id,
          Nama : e.payload.doc.data()['nama'],
          Lokasi : e.payload.doc.data()['lokasi'],
          Keterangan : e.payload.doc.data()['keterangan']
        };
      })
    });

    
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );




  }

  onChange(newVal) {
    console.log(newVal)
    
    
    this.fbservice.getsubcol(newVal,'sensor').subscribe( data => {
      this.sensorList = data.map( e => {
        return {
          id : e.payload.doc.id,
          Nama : e.payload.doc.data()['nama']
        }
      });
      
    })
  }

  onChangeDate(newDate) {
    let d = new Date(newDate);
    console.log(d);
    this.selectedDate = d.toISOString().split('T')[0];  //format date to MMMM-DD-YY
  }

  onChangeSensor(newSensor) {
    this.Highcharts = Highcharts;
    this.selectedSensor = newSensor;
    let dx:any;
    
    // graph
    if (typeof this.selectedDate != 'undefined' && typeof this.selectedSensor != 'undefined')  {
      this.fbservice.getTelemetry(this.selectedSensor,this.selectedDate)
        .subscribe(dd => {
          let dx = dd.map( ee => {
            return ee.payload.doc.data()['val']/10
          })
          let dy = dd.map( ee => {
            let s = ee.payload.doc.data()['ts'].toDate()
            
            return new Date(s).toTimeString().split(' ')[0]
          })
          this.chartOptions = {
            xAxis: {
              categories: dy,
        
            },
            series : [
              {
                data : dx,
                type: 'line',
                name: 'Temperatur'
              }
            ]
          }
        })   
      
    }
  }

  updateChart(x,d) {
    this.chartOptions = { 
      xAxis:{
        categories: x,
      },
      series : [{
        data: d,
        type: 'line',
        name: 'Temperature'
      }]}
  }
}
