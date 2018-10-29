import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'showkapik-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  private members = [
    {
      nom: 'Skollnope',
      icon:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
      twitch: 'www.twitch.tv/skollnope',
      youtube: '',
      twitter: 'https://twitter.com/SkollNope'
    },
    {
      nom: 'Titou',
      icon:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
      twitch: 'www.twitch.tv/lpe_titou',
      youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
      twitter: ''
    }
  ]

  constructor() {}

  ngOnInit() {}
}
