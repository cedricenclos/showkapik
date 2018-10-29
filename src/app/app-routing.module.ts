import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShowkapikComponent } from './showkapik/showkapik.component'

const routes: Routes = [
  {
    path: '',
    component: ShowkapikComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
