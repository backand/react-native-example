import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

import { fetchTodos, addTodo, toggleTodo } from './todoActions'
import { openModal } from './../../reusableComponents/Modal/modalActions'

class TodoApp extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { fetchTodos, user, loaded } = nextProps
    if(!loaded && user) {
      fetchTodos(user.toJS());
    }
  }
  render () {
    const { props: { user } } = this

    if(user) {
      return (
        <View style={{flex: 1}}>
          <AddTodo {...this.props}/>
          <TodoList {...this.props}/>
        </View>
      )
    }
    else {
      return (
        <View style={{height: 0, width: 0}}>
        </View>
      )
    }
  }
}


const mapStateToProps = state => {
  return {
    user: state.user.get('data'),
    todos: state.todos.get('data'),
    loading: state.todos.get('loading'),
    loaded: state.todos.get('loaded'),
    error: state.todos.get('error'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: (user) => {
      dispatch(fetchTodos(user));
    },
    toggleTodo: (user, todo) => {
      dispatch(toggleTodo(user, todo))
    },
    addTodo: (user, todo) => {
      dispatch(addTodo(user, todo))
    },
    openModal: (text) => {
      dispatch(openModal(text))
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
