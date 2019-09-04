import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { createStackNavigator } from "react-navigation";

import PropTypes from "prop-types";


 class detail extends React.Component{

    static navigationOptions = ({navigation})=>({
        title:navigation.state.params.title,
    });

    constructor(props){
        super(props);
    }
    render(){
        var data = this.props.navigation.state.params;
        if (data == null){
            return(<View></View>);
        }
        

        return(
            <View style = {styles.container}>
                <Text>{data.title}</Text>
                <Text>{data.content}</Text>
                <Button
                title = '下一个'
                onPress = {()=>this._onPress()}
                />
            </View>
        );
    }

    _onPress(){
        let { navigate } = this.props.navigation;//跳转页面
      navigate('detail_next');

    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
    },
})

const HomeNavScreen = createStackNavigator(
    {
      detail_next: detail,
    },
  );

module.exports = detail;


