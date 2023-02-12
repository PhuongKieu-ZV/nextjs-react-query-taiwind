import { IndexeKeys } from '@/src/enum/redux'
import { RootState } from '../type'

export default class TodoSelectors {
  static getTodos(state: RootState) {
    return state.todo.todos
  }

  static getSelectedCategory(state: RootState) {
    return state.todo.selectedCategory
  }

  static getCategoryIndex(state: RootState) {
    return state.todo.indexes[IndexeKeys.TODO_CATEGORY_ID]
  }
}
