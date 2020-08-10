import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import Data from './data/TodoData';

import './App.scss';

function App() {
	const [todoItems, setTodoItems] = useState(Data);

	const addItem = todoItem => {
		const newItems = [...todoItems];
		newItems.unshift({
			index: newItems.length + 1,
			value: todoItem.newItemValue,
			done: false
		});

		setTodoItems(newItems);
	};

	const removeItem = itemIndex => {
		const newItems = [...todoItems];
		newItems.splice(itemIndex, 1);

		setTodoItems(newItems);
	};

	const markTodoDone = itemIndex => {
		const newItems = [...todoItems];
		let todo = newItems[itemIndex];
		newItems.splice(itemIndex, 1);
		todo.done = !todo.done;
		todo.done ? newItems.push(todo) : newItems.unshift(todo);

		setTodoItems(newItems);
	};

	return (
		<Container maxWidth="sm" id="main" className="App">
				<TodoHeader/>
				<TodoList
					items={todoItems}
					removeItem={removeItem}
					markTodoDone={markTodoDone}/>
				<TodoForm addItem={addItem}/>
		</Container>
	);
}

export default App;
