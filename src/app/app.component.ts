import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigasi : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sidemenu();
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sidemenu() {
    this.navigasi =[
      {
        title: 'Home', url: '/home', icon:'home'
      },
      {
        title: 'Daftar Perangkat', url: '/device', icon:'tools'
      },
      {
        title: 'Daftar Sensor', url: '/sensor', icon:'home'
      },
      {
        title: 'Telemetry', url: '/telemetry', icon:'home'
      }
    ]
  }
}
