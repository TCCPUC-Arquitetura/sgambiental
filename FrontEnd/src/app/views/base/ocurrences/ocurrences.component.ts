import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
//import {MiningZoneService} from './mining-zone.service'
//import { MiningZone } from './mining-zone';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { min, map } from 'rxjs/operators';
import { OcurrencesService } from './ocurrences.service';
import { Ocurrence } from './ocurrence';

@Component({
  selector: 'app-ocurrences',
  templateUrl: './ocurrences.component.html',
  styleUrls: ['./ocurrences.component.css']
})
export class OcurrencesComponent implements OnInit {


  searchForm;
  //miningZones: MiningZone[];
  change: string;
  visibility: string;
  @ViewChild('myModal') public myModal: ModalDirective;
  ocurrenceList: Ocurrence[];

  constructor(
    private formBuilder: FormBuilder,
    private ocurrenceService: OcurrencesService

  ) {


    this.searchForm = this.formBuilder.group({
      id : '',
      name: '',
      oreType:''
    });
  }

  ngOnInit(): void {

    this.ocurrenceService.getOcurrencesList().subscribe(((data:any):void=>{
      this.ocurrenceList = data;
    }))

  }

  toggleVisibility(id){

    console.log(id)
    document.getElementById(id).style.display = "none";
    
  }

  onSubmit(searchFormData) {
    // Process checkout data here
    


  }


  

}
