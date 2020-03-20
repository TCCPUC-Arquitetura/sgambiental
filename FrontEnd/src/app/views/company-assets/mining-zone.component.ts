import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MiningZoneService} from './mining-zone.service'
import { MiningZone } from './mining-zone';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { min } from 'rxjs/operators';


@Component({
  selector: 'app-mining-zone',
  templateUrl: './mining-zone.component.html',
  styleUrls: ['./mining-zone.component.css']
})
export class MiningZoneComponent implements OnInit {

  searchForm;
  miningZones: MiningZone[];
  change: string;
  visibility: string;
  @ViewChild('myModal') public myModal: ModalDirective;

  constructor(
    private formBuilder: FormBuilder,
    private miningZoneService: MiningZoneService


  ) {


    this.searchForm = this.formBuilder.group({
      id : '',
      name: '',
      oreType:''
    });
  }

  ngOnInit(): void {
    this.miningZoneService.getMiningZoneList().subscribe((data: any): void => {
      this.miningZones = data;
    })

  }

  toggleVisibility(id){

    console.log(id)
    document.getElementById(id).style.display = "none";
    
  }

  onSubmit(searchFormData) {
    // Process checkout data here
    

    console.warn('Your order has been submitted', searchFormData);

    var foundItems = []

    for(var i = 0; i < this.miningZones.length; i++){
      var mZ = this.miningZones[i]
      if(this.checkArray(searchFormData, mZ)){
        foundItems.push (mZ);

            
      }
    
    }
    this.miningZones = foundItems;


  }

  checkArray(searchFormData, miningZone){

   
    if(searchFormData.id != ''){

      return parseInt(searchFormData.id) == miningZone.id;
     
    }else{


      return searchFormData.name == miningZone.name || searchFormData.oreType == miningZone.oreType;
    }






  }

  


}
