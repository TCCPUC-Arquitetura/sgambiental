import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MiningZoneService {

  constructor(
    private client : HttpClient

  ) { 

  }

  getMiningZoneList(){
    return this.client.get("./assets/mining-zone-list.json");
  }
}
