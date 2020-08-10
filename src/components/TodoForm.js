import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';

const TodoListForm = props => {
	const form = useRef();
	const itemName = useRef();

	const onSubmit = event => {
		event.preventDefault();
		console.log(itemName);

		const newItemValue = itemName.current.value;

		if(newItemValue) {
			props.addItem({newItemValue});
			form.current.reset();
		}
	}

	return (
		<form ref={form} onSubmit={onSubmit} className="form-inline">
			<TextField
				type="text"
				inputRef={itemName}
				className="form-control"
				placeholder="add a new todo..."/>
			<Button type="submit" className="btn btn-default">Add</Button>
		</form>
	);
}

export default TodoListForm;