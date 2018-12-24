export interface UserInfo {
  name: string
  id: string
  logo?: string
  bio?: string
  twitter?: string
  youtube?: string
  online?: boolean
}

export class User {
  private _info: UserInfo

  constructor(userInfo: UserInfo) {
    this._info = userInfo
  }

  get twitch() {
    return 'https://twitch.tv/' + this.id
  }

  get twitter() {
    return this._info.twitter
  }

  get youtube() {
    return this._info.youtube
  }

  get logo() {
    return this._info.logo
  }

  get bio() {
    return this._info.bio
  }

  get name() {
    return this._info.name
  }

  get id() {
    return this._info.id
  }

  get online() {
    return this._info.online
  }
}
