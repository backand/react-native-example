import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import LogoutBtn from './LogoutBtn';

const UserComponent = ({user, signout}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width: 20, height: 20}} source={require('./../../../static/img/user.png')} />
        <Text>Hey, {user.data.username} </Text>
      </View>
      <View>
        <LogoutBtn handlePress={signout}/>
      </View>
    </View>
  );
}

export default UserComponent
