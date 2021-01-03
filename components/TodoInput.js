import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const TodoInput = props => {
	const [inpVal, setInpVal] = useState('')

	const addBtnHandler = () => {
		if (inpVal !== '') {
			props.addBtnClick(inpVal)
			setInpVal('')
		}
	}

	const updateInp = txt => {
		setInpVal(txt)
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={inpVal}
				placeholder="Add your goal here"
				onChangeText={updateInp} />
			<View style={styles.btn}>
				<Button title="ADD" color="#269fe6" onPress={addBtnHandler} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1.5,
		width: '78%',
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		padding: 8,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginVertical: 20
	},
	btn: {
		width: '18%'
	}
})

export default TodoInput
