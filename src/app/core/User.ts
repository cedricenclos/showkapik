export interface UserInfo {
  name: string
  id: string
  logo?: string
  description?: string
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

  get description() {
    return this._info.description
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

  set online(online: boolean) {
    this._info.online = online
  }
}
