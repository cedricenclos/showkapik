import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { User } from './User'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class TwitchService {
  private _user: TwitchUser

  constructor(private cookies: CookieService, private http: HttpClient) {
    this._user = this.loadUserCookie() || {
      accessToken: '',
      refreshToken: '',
      displayName: '',
      description: '',
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

  public members(): Observable<User[]> {
    return this.http.get(environment.backend.url + '/streamers').pipe(
      map((users) => {
        const tab = []
        if (users instanceof Array) {
          users.forEach((value, key) => {
            const user = new User({
              name: value.display_name,
              id: value.name,
              logo: value.picture_url,
              description: value.description,
              twitter: 'value.twitter',
              youtube: value.youtube,
            })
            tab.push(user)
          })
        }
        return tab
      })
    )
  }

  public isOnline(id: string): Observable<boolean> {
    return this.http.get(environment.backend.url + '/online/' + id) as Observable<boolean>
  }
}

export interface TwitchUser {
  accessToken: string
  refreshToken: string
  displayName: string
  description: string
  logo: string
}
