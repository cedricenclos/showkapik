import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShowkapikComponent } from './showkapik.component'
import { ToolbarComponent } from './toolbar/toolbar.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatCardModule,
  MatToolbarModule,
  MatGridListModule
} from '@angular/material'
import { MembersListComponent } from './members-list/members-list.component'
import { PresentationComponent } from './presentation/presentation.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: [
    ShowkapikComponent,
    ToolbarComponent,
    MembersListComponent,
    PresentationComponent
  ]
})
export class ShowkapikModule {}
