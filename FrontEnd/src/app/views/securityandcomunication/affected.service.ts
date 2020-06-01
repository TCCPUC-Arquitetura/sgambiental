import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Affected } from './affected';

@Injectable({
  providedIn: 'root'
})

export class AffectedService {

  promiseResult: Affected;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private client: HttpClient

  ) { }


getAffectedList(){
 return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apicomunicacao/afetados', this.httpOptions).pipe(map((data:any)=>
  {
    return data;
  }
  ));
}


}
