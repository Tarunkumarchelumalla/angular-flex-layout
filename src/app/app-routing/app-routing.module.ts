import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexlayoutComponent } from '../flexlayout/flexlayout.component';

const routes: Routes = [{ path: 'flex', component: FlexlayoutComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
export const routingcomps = [FlexlayoutComponent];
