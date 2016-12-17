import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackandAnmsLogin = ({handlePress}) => {
  return (
    <Icon.Button name="user-circle-o" backgroundColor="#ccc" onPress={() => handlePress()}>
      Log in As Guest
    </Icon.Button>
  )
}

export default BackandAnmsLogin
