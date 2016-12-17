import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, ListView, TouchableHighlight, Image, RecyclerViewBackedScrollView } from 'react-native'
import LoadingHoc from './../LoadingHoc'

class TodoListComponent extends React.Component {
  componentWillMount() {
    const { props: { todos } } = this
    if (todos && todos.length > 0) {
      let dataSource = todos;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(dataSource),
      });
    }
  }
  renderRow = (rowData, sectionID, rowID, highlightRow) => {
    const { props: { update } } = this
    return (
      <TouchableHighlight onPress={() => {
          update(rowData.id, Object.assign({}, rowData, {
            completionDate: rowData.completionDate ? null : (new Date()).toISOString()}))
          highlightRow(sectionID, rowID);
        }}>
        <View>
          <View style={styles.row}>
            <Text style={[styles.text, rowData.completionDate && {textDecorationLine: 'line-through'}]}>
              {rowData.text}
            </Text>
            {rowData.completionDate &&
              <Image style={styles.icon} source={require('./../../../static/img/done.png')}/>}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
     <View
       key={`${sectionID}-${rowID}`}
       style={{
         height: 1,
         backgroundColor: '#CCCCCC',
       }}
     />
    );
 }
  render() {
    const { props: { todos } } = this

    return (
      <View style={{flex: 1}}>
        {todos && todos.length > 0 && (<ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  icon: {
    width: 20,
    height: 20
  },
  text: {
    flex: 1,
  },
});

export default LoadingHoc(TodoListComponent)
