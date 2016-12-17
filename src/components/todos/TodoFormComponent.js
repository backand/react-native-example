import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TodoFormComponent = ({addTodo, user}) => {
  return (
    <View>
      <TextInput
        placeholder='Add a new todo'
        onSubmitEditing={(event) => {
          addTodo({
          	text: event.nativeEvent.text,
          	creationDate: (new Date()).toISOString(),
          	completionDate: null,
          	user: user.data.userId
          })
        }}
      />
    </View>
  )
}

export default TodoFormComponent
