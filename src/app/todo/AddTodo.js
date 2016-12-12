import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const AddTodo = (props) => {
  return (
    <View>
      <TextInput
        placeholder='Add a new todo'
        onSubmitEditing={(event) => {
          props.addTodo(props.user.toJS(), {
          	text: event.nativeEvent.text,
          	creationDate: (new Date()).toISOString(),
          	completionDate: null,
          	user: props.user.get('details').get('userId') != -1 ? props.user.get('details').get('userId') : null
          })
        }}
      />
    </View>
  )
}

export default AddTodo
