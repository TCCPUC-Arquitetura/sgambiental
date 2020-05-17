import { Component, OnInit } from '@angular/core';
import { AffectedService } from './affected.service';
import { map } from 'rxjs/operators';
import { Affected } from './affected';

@Component({
  selector: 'app-affected',
  templateUrl: './affected.component.html',
  styleUrls: ['./affected.component.css']
})
export class AffectedComponent implements OnInit {
  affectedList: Affected[];

  
  constructor(
    private affectedService: AffectedService
  ) { }

  ngOnInit(): void {
    this.affectedService.getAffectedList().subscribe((data:any):void=>
    {this.affectedList = data})
    
    }
  
  
  

}
