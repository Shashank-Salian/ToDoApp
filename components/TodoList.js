import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Pressable, TextInput } from 'react-native'

const TodoList = props => {
	const [isEditMode, setIsEditMode] = useState(false)
	const [editedTodo, setEditedTodo] = useState(props.itemData.value)

	const doneBtnClickedHandler = () => {
		Alert.alert("Are you sure ?",
			`Are you done with the task ${props.itemData.value}`,
			[
				{
					text: 'No',
					style: 'cancel'
				},
				{
					text: 'Yes',
					style: 'default',
					onPress: () => props.doneBtnClicked(props.itemData.id)
				}
			])
	}

	const onEditTodoHandler = () => {
		setIsEditMode(true)
	}

	const editTodoHandler = () => {
		props.editBtnClicked(props.itemData.id, editedTodo)
		setIsEditMode(false)
	}

	return (
		<View style={styles.container}>
			{isEditMode ? <TextInput
							value={editedTodo}
							onChangeText={txt => setEditedTodo(txt)}
							autoFocus={true}
							style={{...styles.todoContainer, ...styles.input}} /> : 
			<Pressable style={styles.todoContainer} onLongPress={onEditTodoHandler}>
				<Text style={styles.txt}>{props.itemData.value}</Text>
			</Pressable>}
			<TouchableOpacity style={isEditMode ? { ...styles.doneBtn, backgroundColor: '#eb4034' } :
				styles.doneBtn}
				activeOpacity={0.8}
				onPress={isEditMode ? editTodoHandler : doneBtnClickedHandler}>
				<Image source={isEditMode ? require('../assets/Icons/edit.png') : 
					require('../assets/Icons/checkMark.png')}
					style={styles.img} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 5,
		marginVertical: 5,
		alignItems: 'center'
	},
	todoContainer: {
		width: '80%',
		padding: 10,
		backgroundColor: '#269fe6',
		borderRadius: 4
	},
	txt: {
		fontFamily: 'Poppins-Regular'
	},
	img: {
		width: 24,
		height: 24
	},
	doneBtn: {
		backgroundColor: '#0bb03c',
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 4
	},
	input: {
		fontFamily: 'Poppins-Regular'
	}
})

export default TodoList
