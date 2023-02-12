import { TodoAction, TodoSelectors } from '@/src/redux/todo'
import { useDispatch, useSelector } from 'react-redux'

const TodoPage = () => {
  const todos = useSelector(TodoSelectors.getTodos)
  const dispatch = useDispatch()
  const handleLoad = () => {
    dispatch(TodoAction.fetchTodo())
  }
  return (
    <>
      <h1 className="text-primary">Todo List</h1>
      <button
        type="button"
        onClick={handleLoad}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Fetch todo
      </button>
      <br />
      <p>{JSON.stringify(todos)}</p>
    </>
  )
}

export default TodoPage
