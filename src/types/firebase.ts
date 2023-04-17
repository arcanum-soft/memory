export enum Collections {
  CATEGORY = 'category',
  USER = 'user',
  CARD = 'card'
}

export interface User {
  username: string
}

export interface Category {
  image: string
  name: string
  key: string
}

export interface Card {
  categoryKey: string
  pairingKey: string
  frontImage: string
  backImage: string
}