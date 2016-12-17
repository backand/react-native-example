import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Modal, Button } from 'react-native'
import { connect } from 'react-redux'
import { hideModal } from './modalActions'

const ControlledModal = (props) => {
  const { open, text, onHide } = props
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={open}
      onRequestClose={() => {console.log("Modal has been closed.")}}
      >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text>{text}</Text>
          <View style={{marginTop: 10}}>
            <Button
              onPress={onHide}
              title="Hide"
              color='#ddd'
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100000,
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
});

const mapStateToProps = state => {
  return {
    open: state.modal.get('open'),
    text: state.modal.get('text'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHide: () => {
      dispatch(hideModal());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlledModal)
