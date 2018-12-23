import { Component, OnInit } from '@angular/core'
import { TwitchService } from 'src/app/core/TwitchService'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'showkapik-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [TwitchService],
})
export class ToolbarComponent implements OnInit {
  public twitch: TwitchService
  public backUrl: string

  constructor(private t: TwitchService) {
    this.twitch = t
    this.backUrl = 'http://' + environment.backend.url + '/auth/twitch'
  }

  ngOnInit() {}
}
