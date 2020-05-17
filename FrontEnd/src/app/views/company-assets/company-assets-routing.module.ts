import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningZoneComponent } from './mining-zone.component';
import { MiningZoneCreateComponent } from './mining-zone-create.component';
import { MiningZoneDetailsComponent } from './mining-zone-details.component';
import {EquipmentComponent} from './equipment.component';
import {EquipmentCreateComponent} from './equipment-create.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Ativos'
    },
    children: [
      {
        path: '',
        redirectTo: 'mining-zone'
      },
      {
        path: 'mining-zone',
        component: MiningZoneComponent,
        data: {
          title: 'Zona de Mineração'
        }
      },
      {
        path: 'mining-zone-create',
        component: MiningZoneCreateComponent,
        data: {
          title: 'Nova Zona de Mineração'
        }
      },
      {
        path: 'mining-zones/:miningZoneId',
        component: MiningZoneDetailsComponent,
        data: {
          title: 'Editar Zona de Mineração'
        }
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
        data: {
          title: 'Equipamentos'
        }
      },
      {
        path: 'equipment-create',
        component: EquipmentCreateComponent,
        data: {
          title: 'Criar Equipamentos'
        }
      }
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAssetsRoutingModule { }
