/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text,Button,Alert ,Image,FlatList,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
var homeIcon = require('./myimages/1.png');


import DetailsScreen from './Componts/Home'
import { TouchableOpacity } from "react-native-gesture-handler";

var MeScreen = require('./Componts/Me');

class LogoTitle extends React.Component{
  render() {
    return (
      <Image
        style={{ width: 30, height: 30 ,}}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions =  ({navigation, screenProps})=>({
    title:'首页',
    headerRight: (
      <Button
        onPress = {()=>navigation.state.params.navigatePress()}
        title ="下一页"
        style = {{marginRight:8,backgroundColor:'cyan',marginRight:10}}
      />
    ),
  });

  constructor(props){
    super(props);
    this.state = {
      dataSource:[]
    };
    // this._onPress = this._onPress.bind(this);
  }

  renderItem(rowData){
    return(
      <TouchableOpacity 
      onPress = {this._onPress.bind(this)}
      >
      <View style = {styles.cell}>
        <Image style = {{width:40,height:40,backgroundColor:"red",alignItems:"center",marginTop:8,marginLeft:8,position:'absolute'}}
        ></Image>
        <View style = {{marginLeft:56,marginRight:8}} flexDirection='column'>
           <Text numberOfLines = {0} color = 'black'  alignItems='flex-start' >{rowData.key}</Text>
           <Text style = {{color:'gray',fontFamily:'Helvetica'}} numberOfLines ={0} >{rowData.key}</Text>
        </View>
        
      </View>
      </TouchableOpacity>
    )
  }

  componentDidMount(){
    this.props.navigation.setParams({navigatePress:this.navigatePress});
    this.fetchData();
  }

    _onPress(){
      const { navigate } = this.props.navigation;//跳转页面
      navigate('Home_Des');
    }

    navigatePress = ()=>{
      const { navigate } = this.props.navigation;//跳转页面
      navigate('Home_Des');
    }

    fetchData(){
      this.setState({
        dataSource: [
          {key:'小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
          {key:'小哈小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到小哈dasdasodj到家都安静大师大街上街道上到家啊搜到骄傲是大瑟吉欧到家啊搜到骄傲圣诞节啊搜到'},
        ]
      })
    }

  render() {
    return (
      <View style={{ flex: 1}}>

        <FlatList style = {styles.listView}
        data = {this.state.dataSource}
        renderItem = {({item})=>this.renderItem(item)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  listView:{
    backgroundColor:'cyan',
  },
  cell:{
    flexDirection:'row',
    backgroundColor:'white',
    marginLeft:8,
    marginTop:8,
    height:'auto',
  },
});



const HomeNavScreen = createStackNavigator(
  {
    Home: HomeScreen,
    Home_Des:DetailsScreen,
  }
);

const DetailNavScreen = createStackNavigator(
  {
    Details:DetailsScreen,
  }
)

const MeNavScreen = createStackNavigator(
  {
    Me:MeScreen,
  }
)


const RootStack1 = createBottomTabNavigator(
  {
    HomeNav:{
      screen:HomeNavScreen,
      navigationOptions:{
        tabBarLabel:'首页',
        tabBarIcon:({tintColor, focused}) => (
          <Icon 
          name={'ios-home'} 
          size={30} 
          color="#4F8EF7" />
      ),

      }
  },
    DetailsNav: {
      screen:DetailNavScreen,
      navigationOptions:{
        tabBarLabel:'消息',
        tabBarIcon:({tintColor, focused}) => (
          <Icon 
          name={'ios-aperture'} 
          size={30} 
          color="#4F8EF7" />
      ),
      },
    },
    MeNav:{
      screen:MeNavScreen,
      navigationOptions:{
        tabBarLabel:'我',
        tabBarIcon:({tintColor, focused}) => (
          <Icon 
          name={'ios-settings'} 
          size={30} 
          color="#4F8EF7" />
      ),
      }
    },
  },
  {
    initialRouteName:'HomeNav',
    showIcon:'true',
  },
);

const AppContainer = createAppContainer(RootStack1);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
