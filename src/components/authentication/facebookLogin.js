import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

class FacebookLogin extends React.Component {
  handleLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              this.props.handlePress('socialToken', 'facebook', data.accessToken)
            }
          )
        }
      },
      error => {
        alert('Login failed with error: ' + error);
      }
    );

  }
  render () {
    return (
      <Icon.Button name="facebook-official" backgroundColor="#3b5998" onPress={this.handleLogin}>
        Log in with Facebook
      </Icon.Button>
    )
  }
}

export default FacebookLogin
