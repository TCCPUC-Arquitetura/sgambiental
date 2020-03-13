import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningZoneComponent } from './mining-zone.component';
import { MiningZoneCreateComponent } from './mining-zone-create.component';
import { MiningZoneDetailsComponent } from './mining-zone-details.component';

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
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAssetsRoutingModule { }
