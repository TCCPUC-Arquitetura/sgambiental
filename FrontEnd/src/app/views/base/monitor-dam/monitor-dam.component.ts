import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorService } from './sensorsservice.service';
import { VibrationData } from './vibrationdata';
import { WaterSensorData } from './watersensordata';
import {AsyncPipe} from '@angular/common'
import { WeatherService } from './weather.service';
import { WeatherData } from './weatherdata';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-monitor-dam',
  templateUrl: './monitor-dam.component.html',
  styleUrls: ['./monitor-dam.component.css'],
  providers: [SensorService],
})
export class MonitorDamComponent implements OnInit, OnDestroy {

  
  max: number = 100;
  showWarning: boolean;
  dynamic: number;
  type: string;

  stacked: any[] = [];

  timer: any = null;
  buttonCaption: string = 'Start';
  vibrationDataList: VibrationData[];
  waterSensorData: WaterSensorData;
   weatherData: WeatherData;
   value:any;
  constructor(

    private sensorsService: SensorService,
    private weatherService: WeatherService
  ) {

  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    // console.log(`onDestroy`, this.timer);
  }



  setDynamic(num):number{
    this.dynamic = num
    


    this.showWarning = true;
    return this.dynamic;
  }

  ngOnInit(){

    this.sensorsService.getVibrationSensorData().subscribe((data:any):void=>{
      this.vibrationDataList = data;
    })

   
this.getWaterSensorData()

    this.weatherService.getWeatherData().subscribe((data:WeatherData)=>this.weatherData={
      name: data['name'],
      state: data['state'],
      data: data['data']
    })

    
   
  }


  getWaterSensorData(){
   return  this.sensorsService.getWaterSensorData().subscribe((data: WaterSensorData)=> this.waterSensorData = {
      level: data.level
    })
  }

  randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    const n = 75;
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 4);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  }

}