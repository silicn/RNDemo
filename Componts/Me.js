import React, {Component} from 'react';
import {
    Text,
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
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
    // this._onRefresh = this._onRefresh.bind(this);
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

  footerItem(){
    let count = this.state.dataSource.count;
    let str = count > 5?'没有数据了':'更多数据';
    return(
      <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
        <Text>{str}</Text>
      </View>
    );
  }
  // 下拉刷新
  __onRefresh(){  
    
    this.setState({
      refreshing:true,
    });

    setTimeout(() => {
      this.setState({
      refreshing:false,
      dataSource:[
        {key:'小张'},
        {key:'小三'},
        {key:'小四'},
        {key:'小五'},
        {key:'老六'},
        {key:'老六'},
        {key:'老六'},
        {key:'老六'},
      ],
    });
    }, 3000);
  }

        

    render() {
      return (
          <FlatList
          style = {styles.containor}
          data = {this.state.dataSource}
          renderItem = {({item})=>this.renderItem(item)}
          onRefresh = {()=>this.__onRefresh()}
          refreshing = {this.state.refreshing}
          ListFooterComponent = {()=>this.footerItem()}
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