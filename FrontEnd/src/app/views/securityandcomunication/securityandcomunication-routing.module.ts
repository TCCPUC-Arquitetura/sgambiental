import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffectedComponent } from './affected.component';
import { EvacuationplanComponent } from './evacuationplan.component'




const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Segurança e Comunicação'
    },
    children: [
      {
        path: '',
        redirectTo: 'affected'
      },
      {
        path: 'affected',
        component: AffectedComponent,
        data:{
          title: 'Moradores'
        }
      },
      {
        path: 'evacuationplan',
        component: EvacuationplanComponent,
        data:{
          title: 'Planos de Evacução'
        }
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityandcomunicationRoutingModule { }
