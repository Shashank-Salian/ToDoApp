import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'

import TodoList from './TodoList'

const TodoListContainer = props => {
	return (
		<FlatList
			data={props.todos}
			style={styles.lists}
			renderItem={itemData => (
				<TodoList
					itemData={itemData.item}
					doneBtnClicked={props.doneBtnClicked}
					editBtnClicked={props.editBtnClicked} />
			)} />
	)
}

const styles = StyleSheet.create({
	lists: {
		marginBottom: 260
	}
})

export default TodoListContainer
