import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShowkapikComponent } from './showkapik.component'
import { ToolbarComponent } from './toolbar/toolbar.component'

import { MatCardModule, MatToolbarModule } from '@angular/material'
import { MembersListComponent } from './members-list/members-list.component'

@NgModule({
  imports: [CommonModule, MatCardModule, MatToolbarModule],
  declarations: [ShowkapikComponent, ToolbarComponent, MembersListComponent]
})
export class ShowkapikModule {}
