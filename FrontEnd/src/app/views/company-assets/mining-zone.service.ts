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
    return this.client.get("https://8e3cd95b-967c-4075-a754-c3354b017cab.mock.pstmn.io/ativos/zonademineracao", this.httpOptions).pipe(map((data: any) => {
      return data;
   }));
   
  }

  save(miningZoneData: any) {
    console.warn(miningZoneData)
  }
}
