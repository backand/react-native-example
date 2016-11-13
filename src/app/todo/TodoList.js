import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, ListView, TouchableHighlight, Image, RecyclerViewBackedScrollView } from 'react-native'
import LoadingHoc from './../../reusableComponents/loadingHoc'

class TodoList extends React.Component {
  componentWillMount() {
    const { props: { todos, loading } } = this
    if (todos) {
      let dataSource = todos.toJS();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(dataSource),
      });
    }
  }
  renderRow = (rowData, sectionID, rowID, highlightRow) => {
    const { props: { toggleTodo, user } } = this
    return (
      <TouchableHighlight onPress={() => {
          toggleTodo(user.toJS(), Object.assign(rowData, {completionDate: rowData.completionDate ? null : (new Date()).toISOString()}))
          highlightRow(sectionID, rowID);
        }}>
        <View>
          <View style={styles.row}>
            <Text style={[styles.text, rowData.completionDate && {textDecorationLine: 'line-through'}]}>
              {rowData.text}
            </Text>
            <View style={styles.icon}>
              {rowData.completionDate &&
                <Image style={{width: 20, height: 20}} source={require('./../../../static/img/done.png')}/>}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    const { props: { todos } } = this

    return (
      <View style={{flex: 1}}>
        {todos && (<ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={{flex: 1}}
        />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  icon: {
    flex: 1,
  },
  text: {
    flex: 11,
  },
});

export default LoadingHoc(TodoList)
