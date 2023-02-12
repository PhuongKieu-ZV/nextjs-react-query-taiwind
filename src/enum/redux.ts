/* eslint-disable no-unused-vars */
import { TodoPayload } from '../redux/todo/type'

export enum ReduxModules {
  TODO = 'TODO',
}

export enum ReduxModulesName {
  TODO = 'todo',
}

export const ReduxCollections = {
  [ReduxModules.TODO]: 'todos',
}

export enum IndexeKeys {
  TODO_CATEGORY_ID = 'categoryId',
  CATEGORY_IS_DELETED = 'isDeleted',
  DELETED_AT = 'deletedAt',
}

export const ReduxIndexes = {
  [ReduxModules.TODO]: [IndexeKeys.TODO_CATEGORY_ID],
}
export interface ReduxCollectionType {
  [ReduxModules.TODO]?: TodoPayload[]
}

export type IndexesType = Record<IndexeKeys, Record<string, string[]>>
