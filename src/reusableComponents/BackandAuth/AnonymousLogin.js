import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackandAnmsLogin = (props) => {
  return (
    <Icon.Button name="user-circle-o" backgroundColor="#ccc" onPress={props.handlePress}>
      Login Anonymously
    </Icon.Button>
  )
}

export default BackandAnmsLogin
