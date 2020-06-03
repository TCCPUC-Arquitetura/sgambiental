import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {VibrationData} from './vibrationdata'
import { WaterSensorData } from './watersensordata';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {


  waterSensorData :WaterSensorData;
  httpOptions = {
  headers :  new HttpHeaders({'Content-type': 'application/json'})
  };
  constructor(

    private client: HttpClient
  ) { }


  getVibrationSensorData(){
    return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apimonitoramento/sensor/vibracao/atividades', this.httpOptions).pipe(map((data:any)=>
    {return data}))
  }

   getWaterSensorData(){
    return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apimonitoramento/sensor/nivel-agua', this.httpOptions).pipe(map((data:WaterSensorData)=>
    {return data}
    ));
  }
}
