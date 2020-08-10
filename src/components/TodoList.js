import React from 'react';
import { List, Divider } from '@material-ui/core';
import TodoListItem from './TodoListItem';

const todoList = props => {
	const items = props.items.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<TodoListItem
					item={item}
					index={index}
					removeItem={props.removeItem}
					markTodoDone={props.markTodoDone}/>
				<Divider />
			</React.Fragment>
		);
	});

	return (
		<List className="list-group">
			{items}
		</List>
	);
}

export default todoList;