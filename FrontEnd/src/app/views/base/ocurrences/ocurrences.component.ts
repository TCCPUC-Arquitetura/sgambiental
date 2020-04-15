import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
//import {MiningZoneService} from './mining-zone.service'
//import { MiningZone } from './mining-zone';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { min } from 'rxjs/operators';

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

  constructor(
    private formBuilder: FormBuilder,


  ) {


    this.searchForm = this.formBuilder.group({
      id : '',
      name: '',
      oreType:''
    });
  }

  ngOnInit(): void {
 //   this.miningZoneService.getMiningZoneList().subscribe((data: any): void => {
   //   this.miningZones = data;
    //})

  }

  toggleVisibility(id){

    console.log(id)
    document.getElementById(id).style.display = "none";
    
  }

  onSubmit(searchFormData) {
    // Process checkout data here
    


  }


  

}
