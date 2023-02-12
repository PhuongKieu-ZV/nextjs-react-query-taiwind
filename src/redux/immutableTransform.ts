import { Record, RecordOf } from 'immutable'
import { createTransform } from 'redux-persist'
import { TodoState } from './todo'
import { initData } from './todo/todo.reducer'

const CustomImmutableTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: RecordOf<TodoState>) => {
    // convert mySet to an Array.
    return inboundState.toJSON()
  },
  // transform state being rehydrated
  (outboundState: TodoState) => {
    // convert mySet back to a Set.
    return Record(outboundState)({
      ...initData,
    })
  },
  // define which reducers this transform gets called for.
  { whitelist: ['todo'] }
)

export default CustomImmutableTransform
