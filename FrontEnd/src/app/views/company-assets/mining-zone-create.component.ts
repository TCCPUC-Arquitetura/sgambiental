import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MiningZoneService } from './mining-zone.service';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-mining-zone-create',
  templateUrl: './mining-zone-create.component.html',
  styleUrls: ['./mining-zone-create.component.css']
})
export class MiningZoneCreateComponent implements OnInit {

  checkoutForm;
  miningTypes;
  processingTypes;

  

  constructor(
    private formBuilder: FormBuilder,
    private miningZoneService: MiningZoneService


  ) {


    this.checkoutForm = this.formBuilder.group({
      id: '',
      name: '',
      location: '',
      oreType: '',
      mining:'',
      area: '',
      processingType: '',
      latitude:null,
      longitude:null,
      test:''

      
    });
  
  }

  ngOnInit(): void {
  
    this.miningTypes = ['Céu aberto', 'Subterrânea'];
    this.processingTypes = ['Úmido', 'Seco'];
  }

  
  onSubmit(miningZoneData) {
    // Process checkout data here
    this.checkoutForm.reset();
    

    console.warn('Your order has been submitted', miningZoneData);
    this.miningZoneService.save(miningZoneData)
  }


}
