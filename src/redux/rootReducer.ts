/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit'
import { ReduxModulesName } from '../enum/redux'
import { TodoReducer } from './todo'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer() {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  return combineReducers({
    [ReduxModulesName.TODO]: TodoReducer.getReducer,
  })
}
