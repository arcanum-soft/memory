import { Card, Category, Lobby, StorageKey, User } from '@/types'
import { Ref } from 'vue'

export interface CategoryCardInterface {
  category: Category
}

export interface GameCardInterface {
  card: Card
}

export interface UseApiClientInterface {
  createUser: (user: string) => Promise<void>
  getCategoryCards: (categoryKey: string) => Promise<void>
  getAllCategories: () => Promise<Category[] | null>
}

export interface UseCardsInterface {
  cards: Ref<Card[]>
  shuffledCards: Ref<Card[]>
  setCards: (value: Card[]) => void
}

export interface UseCategoriesInterface {
  categories: Ref<Category[] | null>
  selectedCategory: Ref<Category | null>
  setSelectedCategory: (category: Category) => void
}

export interface UseGameInterface {
  activeCard: Ref<Card | null>
  flipCard: (card: number, action: boolean) => void
  setActiveCard: (card: Card | null) => void
  setActivePlayer: (player: string) => void
}

export interface UseLobbyInterface {
  lobby: Ref<Lobby | null>
  isLobbyReady: Ref<boolean>
  listenLobby: (lobbyId: string) => void
  getLobby: (lobbyId: string) => Promise<Lobby | null>
  startLobby: (lobbyId: string, creator: string, category: string, cards: Card[], activeCard: null) => void
  joinLobby: (lobbyId: string, guest: string) => void
  removeLobby: (lobbyId: string) => void
  addPoint: (lobbyId: string, player: string) => void
}

export interface UseLocalStorageInterface {
  setItem: <T>(key: StorageKey, data: T) => void
  getItem: <T>(key: StorageKey) => T | null
}

export interface UseUsersInterface {
  user: Ref<User | null>
  setUser: (username: User) => void;
}

export interface UseGameInterface {
  activeCard: Ref<Card | null>
  flipCard: (card: number, action: boolean) => void
  setActiveCard: (card: Card | null) => void
  setActivePlayer: (player: string) => void
}