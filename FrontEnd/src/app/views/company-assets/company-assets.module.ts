import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyAssetsRoutingModule } from './company-assets-routing.module';
import { MiningZoneComponent } from './mining-zone.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { ModalModule } from 'ngx-bootstrap/modal';


import {HttpClientModule} from '@angular/common/http';
import { MiningZoneCreateComponent } from './mining-zone-create.component';
import { MiningZoneDetailsComponent } from './mining-zone-details.component';
import {EquipmentComponent} from './equipment.component';
import {EquipmentCreateComponent} from './equipment-create.component';

import { AgmCoreModule } from '@agm/core';





@NgModule({
  declarations: [MiningZoneComponent, MiningZoneCreateComponent, MiningZoneDetailsComponent, EquipmentComponent, EquipmentCreateComponent],
  imports: [
    CommonModule,
    CompanyAssetsRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_GRu2pdnNTC6gRBBs1NT9OIp7gNXt800'
    })
  ]
})
export class CompanyAssetsModule { }
