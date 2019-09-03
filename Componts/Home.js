import React, {Component} from 'react';
import {
    Text,
  StyleSheet,
  Button,
  View,
  TextInput,
} from 'react-native';



class DetailsScreen extends React.Component {

    static navigationOptions = {  
        title: '消息',//在导航中显示的标题内容
        };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title = '登陆'></Button>
          <TextInput style = {{borderWidth:0.5,borderRadius:5,width:100}}>
            不直达
          </TextInput>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    containor:{
        backgroundColor:"red",
        flex:1,
    },
})

module.exports = DetailsScreen;






