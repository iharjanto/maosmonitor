import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device';
import { FbsService } from 'src/app/service/fbs.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  deviceList =[];
  deviceData : Device;

  constructor(
    private fbservice: FbsService
  ) { 
    this.deviceData = {} as Device;
  }

  ngOnInit() {

    this.fbservice.getPlant().subscribe( (data) => {
      this.deviceList = data.map( e => {
        return {
          id: e.payload.doc.id,
          Nama : e.payload.doc.data()['nama'],
          Lokasi : e.payload.doc.data()['lokasi'],
          Keterangan : e.payload.doc.data()['keterangan']
        };
      })
    })
  }


  CreateDevice() {

  }

  UpdateDevice() {

  }

  DeleteDevice() {

  }


}
