import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

import backand from './../../static/lib/backand'
import AsyncStoragePolyfill from './AsyncStorage'
import MemoryStorage from './MemoryStorage'
import RealmStorage from './RealmStorage'
import { fetchTodos, create_todos, update_todos, remove_todos } from './todos/todosActions'
import { getUserDetails, signin, socialSignin, socialSigninWithToken, useAnonymousAuth, signout } from './authentication/authActions'
import { openModal } from './modal/modalActions'

import Modal from './modal/Modal'
import TitleComponent from './TitleComponent'
import UserComponent from './authentication/UserComponent'
import LoginPageComponent from './authentication/LoginPageComponent'
import TodoFormComponent from './todos/TodoFormComponent'
import TodoListComponent from './todos/TodoListComponent'

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {lastUsername: ''};
  }
  componentWillMount() {
    backand.initiate && backand.initiate({
      appName: 'reactnativetodoexample',
      signUpToken: '4c128c04-7193-4eb1-8f19-2b742a2a7bba',
      anonymousToken: '2214c4be-d1b1-4023-bdfd-0d83adab8235',
      isMobile: true,
      storage: new RealmStorage(),
    });
  }
  componentDidMount() {
    const { props: { getUserDetails, fetchTodos } } = this
    getUserDetails();
  }
  componentWillReceiveProps(nextProps) {
    const { user, fetchTodos } = nextProps
    // console.log(user);
    if (user.loaded && user.data.username != this.state.lastUsername) {
      this.setState({lastUsername: user.data.username});
      fetchTodos();
    }
  }
  render() {
    const { props: { todos, user, fetchTodos, addTodo, updateTodo, removeTodo, signin, signout } } = this
    if (!user.loaded) {
      return <LoginPageComponent signin={signin}/>
    }
    else {
      return (
        <View style={{flex: 1}}>
          <Modal />
          <View style={{flex: 2}}>
            <UserComponent user={user} signout={signout}/>
          </View>
          <View style={{flex: 10}}>
            <TitleComponent todoCount={todos.loaded && user.loaded ? todos.data.length : 0}/>
            {todos.loaded && <TodoFormComponent addTodo={addTodo} user={user}/>}
            <TodoListComponent loading={todos.loading} todos={todos.data} update={updateTodo} remove={removeTodo}/>
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return {
    todos: state.todos,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos())
    },
    addTodo: (data) => {
      dispatch(create_todos(data))
    },
    updateTodo: (id, data) => {
      dispatch(update_todos(id, data))
    },
    removeTodo: (id) => {
      dispatch(remove_todos(id))
    },
    getUserDetails: () => {
      dispatch(getUserDetails());
    },
    signin: (type, ...creds) => {
      switch (type) {
        case 'backand':
          dispatch(signin(creds[0], creds[1]));
          break;
        case 'social':
          dispatch(socialSignin(creds[0]));
          break;
        case 'socialToken':
          dispatch(socialSigninWithToken(creds[0], creds[1]));
          break;
        default:
          dispatch(useAnonymousAuth());
      }
    },
    signout: () => {
      dispatch(signout())
    },
    openModal: (text) => {
      dispatch(openModal(text))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
