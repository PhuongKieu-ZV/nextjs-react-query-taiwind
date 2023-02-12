import { IndexesType } from '@/src/enum/redux'

export interface CategoryPayload {
  id: string
  name: string
  isDeleted: boolean
}

export interface TodoState {
  isFetching: boolean
  error?: null | string
  todos: Record<string, TodoPayload>
  isUpdatingById: Record<string, boolean>
  selectedCategory: null | string
  indexes: IndexesType
}

export interface TodoPayload {
  id: string
  name: string
  checked: boolean
  categoryId: string
  category?: CategoryPayload
}
