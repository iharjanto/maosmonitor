import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'device',
    loadChildren: () => import('./pages/device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'sensor',
    loadChildren: () => import('./pages/sensor/sensor.module').then( m => m.SensorPageModule)
  },
  {
    path: 'telemetry',
    loadChildren: () => import('./pages/telemetry/telemetry.module').then( m => m.TelemetryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
