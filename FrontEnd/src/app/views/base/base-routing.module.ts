import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import {DamCreateComponent} from './dam-create/dam-create.component';
import { ChooseDamComponent } from './choose-dam/choose-dam.component';
import {MonitorDamComponent} from './monitor-dam/monitor-dam.component';
import { OcurrencesComponent } from './ocurrences/ocurrences.component';
import { OcurrencesCreateComponent } from './ocurrences/ocurrences-create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Monitoramento de Barragens'
    },
    children: [
    
    
  
      {
        path: 'monitor-dam',
        component: MonitorDamComponent,
        data: {
          title: 'B1'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Cadastro'
        }
      },
      {
        path: 'dam-create',
        component: DamCreateComponent,
        data: {
          title: 'Cadastro'
        }
      },
      {
        path: '',
        redirectTo:'choose-dam'
      },
        
    {
      path: 'choose-dam',
      component: ChooseDamComponent,
      data: {
        title: 'Selecionar Barragem'
      }
    },
      {
        path: 'ocurrences',
        component: OcurrencesComponent,
        data: {
          title: 'Ocorrências'
        }
      },
      {
        path: 'ocurrences-create',
        component: OcurrencesCreateComponent,
        data: {
          title: 'Criação Ocorrências'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Pesquisar'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
