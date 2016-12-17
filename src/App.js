import React from 'react';
import { StyleSheet, StatusBar, View, Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import * as CONFIG from './config/appConfig';
import TodoApp from './components/TodoApp';

const store = configureStore();

const App = (props) => {
  return (
      <View style={styles.root}>
        <StatusBar hidden={CONFIG.STATUSBAR_HIDDEN}/>
        <Provider store={store}>
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image source={require('./../static/img/Backand-logo.png')} />
            </View>
            <View style={styles.body}>
              <TodoApp />
            </View>
          </View>
        </Provider>
      </View>
  )
}


const styles = StyleSheet.create({
  root: {
    height: CONFIG.SCREEN.HEIGHT,
    width: CONFIG.SCREEN.WIDTH,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    flexDirection:'column',
  },
  logo: {
    flex: 2,
    backgroundColor: '#3B3738',
    alignItems:'center',
    justifyContent:'center'
  },
  body: {
    flex: 10
  }
});

export default App;
