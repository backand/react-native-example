import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TitleComponent = ({todoCount}) => {
  return (
    <Text style={{fontSize: 24}}>
      to-do ({todoCount})
    </Text>
  );
}

export default TitleComponent
