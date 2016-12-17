import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import BackandAnmsLogin from './AnonymousLogin'
import BackandTknLogin from './TokenLogin'
import FacebookLogin from './facebookLogin'

const LoginPageComponent = ({signin}) => {
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text>
          Choose Login method to start using the app
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.method}>
          <BackandAnmsLogin handlePress={signin}/>
        </View>
        <View style={styles.method}>
          <BackandTknLogin handlePress={signin}/>
        </View>
        <View style={styles.method}>
          <FacebookLogin handlePress={signin}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 10,
    justifyContent: 'flex-start',
  },
  method: {
    margin: 20,
  }
});

export default LoginPageComponent;
