import { Component, OnInit } from '@angular/core';
import {MiningZoneService} from './mining-zone.service'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MiningZone } from './mining-zone';
import { MiningZoneCreateComponent } from './mining-zone-create.component';


@Component({
  selector: 'app-mining-zone-details',
  templateUrl: './mining-zone-details.component.html',
  styleUrls: ['./mining-zone-details.component.css']
})

export class MiningZoneDetailsComponent implements OnInit {

  miningZones : MiningZone[];
  miningZone : MiningZone;
  checkoutForm;
  lat: number = -20.167030; 
  lng: number = -44.021588;
  zoom: number = 16;

  miningTypes;
  processingTypes;



  constructor(
    private miningZoneService: MiningZoneService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ) {

    this.checkoutForm = this.formBuilder.group({
      id: '',
      name: '',
      location: '',
      oreType: '',
      mining: '',
      area: '',
      processingType: '',
      latitude:  0,
      longitude: 0
    });

   }

  ngOnInit(): void {
    this.miningZoneService.getMiningZoneList().subscribe(miningZones => this.miningZone = miningZones[+this.route.snapshot.paramMap.get('miningZoneId')]);

    this.miningZoneService.getMiningZoneList().subscribe((data: any): void => {
      this.miningZone = data[+this.route.snapshot.paramMap.get('miningZoneId')];

      this.checkoutForm.patchValue({
        id: this.miningZone.id,
        name: this.miningZone.name,
        location: this.miningZone.location,
        oreType: this.miningZone.oreType,
        mining: this.miningZone.mining,
        area: this.miningZone.area,
        processingType: this.miningZone.processingType,
        latitude:  this.miningZone.latitude,
        longitude: this.miningZone.longitude   

      });


    })

    this.miningTypes = ['céu aberto', 'subterranea'];
    this.processingTypes = ['umido', 'seco'];


  }

}
