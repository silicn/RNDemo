import React, {Component} from 'react';
import {
    Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native';
import Cell from './MeCell';




class MeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource:[],
      refreshing:false,
    };
  }
  static navigationOptions = {  
    title: '我',//在导航中显示的标题内容
  };

  // 加载视图
  componentDidMount(){
    this.setState({
      dataSource:[
        {key:'小张'},
        {key:'小三'},
        {key:'小四'},
        {key:'小五'},
        {key:'老六'},
      ],
    });
 
  }
  // 获取Cell
  renderItem(rowData){
    console.log('cell');
    return(
      <Cell itemName = {rowData.key}></Cell>
    );
  }
  // 下拉刷新
  _onRefresh(){  
    this.setState({
      refreshing:true,
    });
    Alert.alert('刷新');
  }

        

    render() {
      return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
          style = {styles.containor}
          data = {this.state.dataSource}
          renderItem = {({item})=>this.renderItem(item)}
          onRefresh = {()=>this._onRefresh.bind(this)}
          refreshing = {this.state.refreshing}
          />
        // </View>
      );
    }

   
  }

const styles = StyleSheet.create({
    containor:{
        backgroundColor:"white",
        flex:1,
    },
})

module.exports = MeScreen;