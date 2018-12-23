import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShowkapikComponent } from './showkapik.component'
import { ToolbarComponent } from './toolbar/toolbar.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatToolbarModule, MatGridListModule } from '@angular/material'
import { MembersListComponent } from './members-list/members-list.component'
import { PresentationComponent } from './presentation/presentation.component'
import { HttpModule } from '@angular/http'
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  declarations: [ShowkapikComponent, ToolbarComponent, MembersListComponent, PresentationComponent],
  providers: [CookieService],
})
export class ShowkapikModule {}
