import React from 'react';
import { IconButton, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const todoListItem = props => {
	let todoClass = props.item.done ? "done" : "undone";

	const onClickClose = () => {
		const index = parseInt(props.index);
		props.removeItem(index);
	}
	const onClickDone = () => {
		const index = parseInt(props.index);
		props.markTodoDone(index);
	}

	return(
		<ListItem button className="list-group-item ">
			<ListItemText className={todoClass}>
				<span className="icon" aria-hidden="true" onClick={onClickDone}>
					{props.item.done ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
				</span>
				{props.item.value}

				<span
					aria-label="delete"
					onClick={onClickClose}
					className="delete">
					<DeleteIcon />
				</span>
			</ListItemText>
		</ListItem>
	);
}

export default todoListItem;

//				<button type="button" className="close" onClick={onClickClose}>&times;</button>