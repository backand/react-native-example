import React, { PropTypes } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const LoadingHoc = ComposedComponent =>
  (props) => {
    if (props.loading) {
      return (
          <ActivityIndicator
            style={styles.centering}
          />
      )
    }
    else {
      return <ComposedComponent {...props} />
    }
  }

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});


export default LoadingHoc
