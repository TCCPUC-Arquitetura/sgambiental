import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private client: HttpClient
  ) { }



    getWeatherData(){
      return this.client.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/8560/days/15?token=a08be75cfc6cb3cdbea2ea3e293752bb')
    }


}
