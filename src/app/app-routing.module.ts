import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlownaComponent } from './podstrony/glowna/glowna.component';
import { TerminComponent } from './podstrony/termin/termin.component';
import { ZapComponent } from './podstrony/zap/zap.component';
import { KontaktComponent } from './podstrony/kontakt/kontakt.component';
const routes: Routes = [
  {path:'',component:GlownaComponent},
  {path:'termin', component: TerminComponent,},
  {path:'zap', component: ZapComponent},
  {path:'kontakt', component: KontaktComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
