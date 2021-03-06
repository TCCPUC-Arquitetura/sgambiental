import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MiningZone } from './mining-zone';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiningZoneService {

  promiseResult: MiningZone;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private client : HttpClient

  ) { 

  }

   getMiningZoneList(){
    return this.client.get("https://eb9d517b-290d-488d-b77d-baef25f95a84.mock.pstmn.io/apiativos/zonademineracao", this.httpOptions).pipe(map((data: any) => {
      return data;
   }));
   

  
  }

  save(miningZoneData: any) {
    console.warn(miningZoneData)
  }

  addMiningZone(miningZone:MiningZone){
    this.client.post('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apiativos/zonademineracao',miningZone,this.httpOptions );
  }
}
