import { all } from 'redux-saga/effects'
import { TodoSaga } from './todo'

export default function* RootSaga() {
  yield all([TodoSaga()])
}
