import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from "prop-types";

class MeCells extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <TouchableOpacity
            onPress = {()=>{Alert.alert('点击设置')}}
            >
            <View style = {styles.content}>
                <Image style={styles.image} source={require('../myimages/1.png')}></Image>
                <View style = {styles.titles}><Text>{this.props.itemName?this.props.itemName:'设置标题'}</Text></View>
            </View>
            </TouchableOpacity>
        )
    };
}

const styles=StyleSheet.create({
    content:{
        borderBottomColor:'#cbcbcb',
        borderBottomWidth:0.5,
        flexDirection:'row',
        height:58,
    },
    image:{
        position:'absolute',
        height:40,
        width:40,
        backgroundColor:'cyan',
        marginTop:8,
        marginLeft:8,
        marginBottom:8,
        borderRadius:20,
    },
    titles:{
        marginLeft:56,
        fontFamily:'Helvetica',
        fontSize:18,
        alignItems:'center',
        justifyContent:'center',
    }
});


module.exports = MeCells;