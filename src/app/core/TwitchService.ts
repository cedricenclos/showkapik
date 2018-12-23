import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

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

  public isAuthenticate() {
    return this._user.accessToken !== ''
  }

  get user() {
    return this._user
  }

  private loadUserCookie(): TwitchUser | undefined {
    const cookie = this.cookies.get('user')
    if (cookie) {
      return JSON.parse(cookie)
    } else {
      return undefined
    }
  }
}

export interface TwitchUser {
  accessToken: string
  refreshToken: string
  displayName: string
  bio: string
  logo: string
}
