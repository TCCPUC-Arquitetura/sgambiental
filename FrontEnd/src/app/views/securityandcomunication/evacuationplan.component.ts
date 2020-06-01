import { Component, OnInit } from '@angular/core';
import {EvacuationplanService} from'./evacuationplan.service'
import {EvacuationPlan} from './evacuationplan';

@Component({
  selector: 'app-evacuationplan',
  templateUrl: './evacuationplan.component.html',
  styleUrls: ['./evacuationplan.component.css']
})
export class EvacuationplanComponent implements OnInit {
  evacuationPlanList: EvacuationPlan[];


  constructor(

      private evacuationPlanService: EvacuationplanService
  ) { }

  ngOnInit(): void {
  this.evacuationPlanService.getEvacuationPlanList().subscribe((data:any):void=>
  {this.evacuationPlanList = data})
  
  }

}
