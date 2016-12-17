import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const LogoutBtn = ({handlePress}) => {
  return (
    <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handlePress} style={{}}>
    </Icon.Button>
  )
}

export default LogoutBtn
