import { Component, OnInit } from '@angular/core'
import { TwitchService } from 'src/app/core/TwitchService'
import { User } from 'src/app/core/User'

@Component({
  selector: 'showkapik-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
  providers: [TwitchService],
})
export class MembersListComponent implements OnInit {
  private twitch: TwitchService

  private nbCol: number
  private members: User[]

  constructor(private t: TwitchService) {
    this.twitch = t
    this.nbCol = 3
    this.members = t.members()
  }

  ngOnInit() {}
}
