import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.txt}>ToDo App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: '#269fe6',
		alignItems: 'center',
		justifyContent: 'center'
	},
	txt: {
		fontSize: 22,
		fontFamily: 'Montserrat-Bold'
	}
})

export default Header
