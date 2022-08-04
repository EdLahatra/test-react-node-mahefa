export enum KEY {
  BLACKLIST = 'BLACKLIST',
  CAPSLOCK = 'CAPSLOCK',
  LINK = 'LINK',
  EMOTE = 'EMOTE',
  SYMBOLE = 'SYMBOLE',
  BOT = 'BOT',
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum KEY_SYSTEM {
  CHANNEL_INFO = 'CHANNEL_INFO',
}

export enum ACTION {
  SAY_TEXT = 'SAY_TEXT',
}

export enum ROLE {
  BROADCASTER = 'BROADCASTER',
  MODERATOR = 'MODERATOR',
  VIP = 'VIP',
  SUBSCRIBER = 'SUBSCRIBER',
  USER = 'USER',
}

export enum EVENTREDIS {
  REFRESH_TWITCH = 'REFRESH_TWITCH',
  REFRESH_BLACKLIST = 'REFRESH_BLACKLIST',
  REFRESH_CAPSLOCK = 'REFRESH_CAPSLOCK',
  REFRESH_EMOTE = 'REFRESH_EMOTE',
  REFRESH_LINK = 'REFRESH_LINK',
  REFRESH_SYMBOLE = 'REFRESH_SYMBOLE',
  REFRESH_COMMAND = 'REFRESH_COMMAND',
  REFRESH_CHANNELINFO = 'REFRESH_CHANNELINFO',
  REFRESH_GIVEAWAY = 'REFRESH_GIVEAWAY',
  SEND_WINNER_GIVEVAWAY = 'SEND_WINNER_GIVEVAWAY',
}