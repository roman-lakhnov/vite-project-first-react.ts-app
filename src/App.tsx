import axios from 'axios'
import { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import List from './components/List'
import UserItem from './components/UserItem'
import { ITodo, IUser } from './types/types'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

function App() {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		fetchUsers()
		fetchTodos()
	}, [])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			)
			setTodos(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<EventsExample/>
			<Card width={'200px'} height={'200px'} variant={CardVariant.primary}>
				<button>Button</button>
				<div>HI</div>
			</Card>
			<List
				items={users}
				renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
			/><List
			items={todos}
			renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
		/>
		</div>
	)
}

export default App
