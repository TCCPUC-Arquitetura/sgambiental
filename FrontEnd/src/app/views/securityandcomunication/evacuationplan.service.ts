import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EvacuationplanComponent } from './evacuationplan.component';
import {EvacuationPlan} from './evacuationplan';



@Injectable({
  providedIn: 'root'
})
export class EvacuationplanService {
  
  promiseResult: EvacuationPlan;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private client : HttpClient

  ) { }


  getEvacuationPlanList(){
    return this.client.get("https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apicomunicacao/planos-de-evacucao", this.httpOptions).pipe(map((data: any) => {
      return data;
   }));
   
  }

}
