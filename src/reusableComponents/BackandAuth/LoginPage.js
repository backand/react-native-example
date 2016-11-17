import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { anonymousRequest, tokenRequest, logout } from './authActions'
import BackandAnmsLogin from './AnonymousLogin'
import BackandTknLogin from './TokenLogin'
import LogoutBtn from './LogoutBtn'
import { openModal } from './../Modal/modalActions'
import LoadingHoc from './../loadingHoc'

class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render () {
    const { props: { data, handleAnonymousRequest, handleTokenRequest, handleLogout } } = this

    if(!data) {
      return (
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text>
              Choose Login method to start using the app
            </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.method}>
              <BackandAnmsLogin handlePress={handleAnonymousRequest}/>
            </View>
            <View style={styles.method}>
              <BackandTknLogin handlePress={handleTokenRequest}/>
            </View>
          </View>
        </View>
      )
    }
    else {
      return (
        <View style={{flex: 2, flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Text style={{textAlign: 'center', color: 'green', fontSize: 20}}>
            {`Hey, ${data.get('details').get('name')}`}
          </Text>
          <LogoutBtn handlePress={handleLogout}/>
        </View>
      )
    }
  }
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

const mapStateToProps = state => {
  return {
    data: state.user.get('data'),
    loading: state.user.get('loading'),
    error: state.user.get('error'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAnonymousRequest: () => {
      dispatch(anonymousRequest())
    },
    handleTokenRequest: (creds) => {
      dispatch(tokenRequest(creds))
    },
    handleLogout: () => {
      dispatch(logout())
    },
    onError: (text) => {
      dispatch(openModal(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
