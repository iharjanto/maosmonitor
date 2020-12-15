import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device';
import { FbsService } from 'src/app/service/fbs.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {
  deviceList =[];
  deviceData : Device;

  selectedDev :string;
  displayedDev=[];
  constructor(
    private fbservice: FbsService
  ) {
    this.deviceData = {} as Device;
   }

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
    
    this.sensorData();
    
  }

  onChange(newVal) {
    let disp = newVal;
    this.fbservice.getsubcol(disp,'sensor').subscribe( data => {
      this.displayedDev = data.map( e => {
        return {
          id : e.payload.doc.id,
          Nama : e.payload.doc.data()['nama'],
          Keterangan : e.payload.doc.data()['keterangan'],
          AlamatModbus : e.payload.doc.data()['alamatmodbus'],
          KonektorID : e.payload.doc.data()['konektor'],
        }
      })
    })
  }

  sensorData() {
    this.fbservice.getsubcol(this.selectedDev,'sensor').subscribe( data => {
      this.displayedDev = data.map( e => {
        return {
          id : e.payload.doc.id,
          Nama : e.payload.doc.data()['nama']
        }
      })
    })
  }

}
