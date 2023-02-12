import { all, fork, takeEvery, put, delay } from 'redux-saga/effects'
import { TodoAction, TodoPayload, TodoUtils } from '.'

function* fetchTodoSaga() {
  try {
    // Mock call API
    delay(1000)
    const todosFromBE: TodoPayload[] = [
      {
        id: 'beb0bac0-c850-449c-9271-e300a97b65tg',
        name: 'Check task progress',
        checked: false,
        categoryId: 'beb0bac0-c850-449c-9271-e300a97b65d6',
        category: {
          id: 'beb0bac0-c850-449c-9271-e300a97b65d6',
          name: 'Daily',
          isDeleted: false,
        },
      },
    ]

    const { todos } = TodoUtils.prepareDataFromBE(todosFromBE)
    yield put(TodoAction.fetchTodoSuccess(todos))
  } catch (error) {
    console.log({ error })
  }
}

function* watchFetchTodo() {
  yield takeEvery(TodoAction.TYPES.FETCH.START, fetchTodoSaga)
}

export default function* TodoSaga() {
  yield all([fork(watchFetchTodo)])
}
