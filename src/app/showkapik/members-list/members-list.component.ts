import { Component, OnInit } from '@angular/core'
import { TwitchService } from 'src/app/core/TwitchService'
import { User } from 'src/app/core/User'
import { Subscription } from 'rxjs'

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
    this.nbCol = 3
    t.members().subscribe((users) => {
      this.members = users
      this.checkLive()
    })
  }

  checkLive() {
    this.members.forEach((member) => {
      this.t.isOnline(member.id).subscribe((res) => {
        console.log(res)
        member.online = res
      })
    })
    console.log(this.members)
  }

  ngOnInit() {}
}
