import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class BackandTknLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'reactnative@backand.com',
      password: 'Password1'
    }
  }
  render () {
    return (
      <View>
        <Text>Username:</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <Text>Password:</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <Icon.Button name="sign-in" backgroundColor="#3b5998" onPress={() => this.props.handlePress(this.state)}>
          Login with Backand Token
        </Icon.Button>
      </View>
    )
  }
}

export default BackandTknLogin
