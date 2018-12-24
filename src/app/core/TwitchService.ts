import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { User } from './User'

@Injectable()
export class TwitchService {
  private _user: TwitchUser

  constructor(private cookies: CookieService) {
    this._user = this.loadUserCookie() || {
      accessToken: '',
      refreshToken: '',
      displayName: '',
      bio: '',
      logo: '',
    }
  }

  // -------------------------------------
  //             Authentication
  // -------------------------------------

  public isAuthenticate() {
    return this._user.accessToken !== ''
  }

  private loadUserCookie(): TwitchUser | undefined {
    const cookie = this.cookies.get('user')
    if (cookie) {
      return JSON.parse(cookie)
    } else {
      return undefined
    }
  }

  get user() {
    return this._user
  }

  // -------------------------------------
  //             Members
  // -------------------------------------

  public members(): User[] {
    return [
      new User({
        id: 'lpe_glasfeu',
        name: 'LPE_Glasfeu',
        bio: 'Ceci est la bio de Glasfeu !',
        twitter: 'https://twitter.com/SkollNope',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/6650f90d-bef9-4d2b-8603-2bf494a4e231-profile_image-70x70.jpg',
        youtube: 'https://www.youtube.com/channel/UC6VKHsv62jFNXKWaLN3CdnA',
        online: true,
      }),
      new User({
        id: 'skollnope',
        name: 'Skollnope',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
        twitter: 'https://twitter.com/SkollNope',
        youtube: 'd',
        bio:
          'Élevé chez les vikings, SkollNope n\'a pas toujours réussi à s\'intégrer au sein de son clan. Jusqu\'au jour ' +
          'où il eut une vision d\'un dieux en buvant pour la première fois une bière viking. Depuis ce jour il cherche ' +
          'la vérité sur son destin, et décida d\'orner son nom du nom de cette fameuse bière. ',
      }),
      new User({
        id: 'lpe_titou',
        name: 'LPE_Titou',
        bio: 'Ceci est la bio de Titou',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
        youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
        online: true,
      }),
      new User({
        id: 'lpe_glasfeu',
        name: 'LPE_Glasfeu',
        bio: 'Ceci est la bio de Glasfeu !',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/6650f90d-bef9-4d2b-8603-2bf494a4e231-profile_image-70x70.jpg',
        youtube: 'https://www.youtube.com/channel/UC6VKHsv62jFNXKWaLN3CdnA',
      }),
      new User({
        id: 'skollnope',
        name: 'Skollnope',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
        twitter: 'https://twitter.com/SkollNope',
        bio:
          'Élevé chez les vikings, SkollNope n\'a pas toujours réussi à s\'intégrer au sein de son clan. Jusqu\'au jour ' +
          'où il eut une vision d\'un dieux en buvant pour la première fois une bière viking. Depuis ce jour il cherche ' +
          'la vérité sur son destin, et décida d\'orner son nom du nom de cette fameuse bière. ',
      }),
      new User({
        id: 'lpe_titou',
        name: 'LPE_Titou',
        bio: 'Ceci est la bio de Titou',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
        youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
      }),
    ]
    /*return [
      {
        displayName: 'Skollnope',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/skollnope',
        youtube: '',
        twitter: 'https://twitter.com/SkollNope',
      },
      {
        displayName: 'Titou',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/lpe_titou',
        youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
        twitter: '',
      },
      {
        displayName: 'Skollnope',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/skollnope',
        youtube: '',
        twitter: 'https://twitter.com/SkollNope',
      },
      {
        displayName: 'Titou',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/lpe_titou',
        youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
        twitter: '',
      },
      {
        displayName: 'Skollnope',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/a25cf9e9-9bef-42ff-b710-f2578c9a8a7c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/skollnope',
        youtube: '',
        twitter: 'https://twitter.com/SkollNope',
      },
      {
        displayName: 'Titou',
        icon:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/97357a6e-4ff8-4600-a5b7-70f9e108512c-profile_image-70x70.png',
        twitch: 'www.twitch.tv/lpe_titou',
        youtube: 'https://www.youtube.com/channel/UCsdtFB-hn47DNwE6CprocQQ',
        twitter: '',
      },
    ]*/
  }
}

export interface TwitchUser {
  accessToken: string
  refreshToken: string
  displayName: string
  bio: string
  logo: string
}
