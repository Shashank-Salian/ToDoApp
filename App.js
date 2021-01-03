/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoListContainer from './components/TodoListContainer'

const App = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const addTodoHandler = (enteredTodo) => {
    setTodos(oldTodo => {
      return [...oldTodo, { id: Date.now().toString(), value: enteredTodo }]
    })
  }

  const doneClickedHandler = (id) => {
    setTodos(oldTodo => {
      return oldTodo.filter(todo => todo.id !== id)
    })
  }

  const editClickedHandler = (id, updatedVal) => {
    setTodos(oldTodo => {
      const newArr = [...oldTodo]
      for (let todo of oldTodo) {
        if (todo.id === id) {
          todo.value = updatedVal
          break
        }
      }
      return newArr
    })
  }

  const getSavedTodo = async () => {
    setIsLoading(true)
    try {
      const savedTodos = await AsyncStorage.getItem('todos')
      return savedTodos ? JSON.parse(savedTodos) : []
    } catch (e) {
      console.log(e)
    }
  }

  const saveTodo = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSavedTodo().then((res) => {
      setIsLoading(false)
      setTodos(res)
    }).catch((e) => {
      setIsLoading(false)
      console.log(e)
    })
  }, [])

  useEffect(() => {
    saveTodo()
  }, [todos])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Header />
        <View style={styles.container}>
          <TodoInput addBtnClick={addTodoHandler} />
          {isLoading ? <ActivityIndicator size="large" color="#269fe6" /> : 
          <TodoListContainer
            todos={todos}
            doneBtnClicked={doneClickedHandler}
            editBtnClicked={editClickedHandler} />}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default App;
