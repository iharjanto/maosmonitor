import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbsService {
  collectionName = 'plant'
  
  constructor(
    private firestore: AngularFirestore
  ) { 
    
  }

  getPlant() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
  getsubcol(devId :string, subcol:string) {
    return this.firestore.collection(this.collectionName + '/'+devId +'/'+ subcol).snapshotChanges();
  }

  getTelemetry(sensId:string, tgl: String) {
    let path = ['telemetry', sensId, tgl].join("/")
    let _ref = this.firestore.collection(path, ref => ref.orderBy('ts'))
    return  _ref.snapshotChanges()
  
  }
}
