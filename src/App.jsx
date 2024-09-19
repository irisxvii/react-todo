import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  let todos= [
    'SaturdayHackNight',
    'Godot',
    'Tinkerday'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} /> 
    </>
  )
}

export default App
