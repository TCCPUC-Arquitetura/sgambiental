import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectedComponent } from './affected.component';
import { SecurityandcomunicationRoutingModule } from './securityandcomunication-routing.module';
import { EvacuationplanComponent } from './evacuationplan.component'



@NgModule({
  declarations: [AffectedComponent, EvacuationplanComponent],
  imports: [
    CommonModule,
    SecurityandcomunicationRoutingModule
  ]
})
export class SecurityandcomunicationModule { }
