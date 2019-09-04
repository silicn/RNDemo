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
import Icon from 'react-native-vector-icons/Ionicons';
var homeIcon = require('./myimages/1.png');

import detail from './Componts/home_detail';

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
      dataSource:[],
      refreshing:false,
    };
  }

  renderItem(rowData){
    let data = rowData;
    return(
      <TouchableOpacity 
      onPress = {()=>this._select_row(rowData)}
      >
      <View style = {styles.cell}>
        <Image 
        style = {styles.avatar}
        ></Image>
        <View style = {{marginLeft:56,marginRight:8}} flexDirection='column'>
           <Text numberOfLines = {0} color = 'black'  alignItems='flex-start' >{rowData.title}</Text>
           <Text style = {{color:'gray',fontFamily:'Helvetica',marginTop:8,marginBottom:8}} numberOfLines ={3} >{rowData.content}</Text>
        </View>
        
      </View>
     </TouchableOpacity>
    )
  }

  
  _select_row(rowData){
    const { navigate } = this.props.navigation;//跳转页面
    navigate('home_detail',{'title':rowData.title,'content':rowData.content});
    // Alert.alert('select');
  }

    _onPress(){
    }

    navigatePress = ()=>{
      console.log('在吗');
      const { navigate } = this.props.navigation;//跳转页面
      navigate('home_detail');
    }
    componentDidMount(){
      this.props.navigation.setParams({navigatePress:this.navigatePress});
      this.rquest_data();
    }

    rquest_data(){

      this.setState({
        refreshing:true,
      });

      let url = 'https://www.ratjin.com/rat/topic/list';
      let fetchOptions = {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    };
    fetch(url,fetchOptions)
    .then((response)=>response.json())
    .then((responseData) =>{
     this.setState({
       refreshing:false,
       dataSource:responseData.list,
     });
    });
    };


  

  render() {
    return (
      <View style={{ flex: 1}}>
        <FlatList style = {styles.listView}
        data = {this.state.dataSource}
        renderItem = {({item})=>this.renderItem(item)}
        refreshing = {this.state.refreshing}
        onRefresh = {()=>this.rquest_data()}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  listView:{
    backgroundColor:'white',
  },
  cell:{
    flexDirection:'row',
    backgroundColor:'white',
    marginLeft:8,
    marginTop:8,
    height:'auto',
    borderBottomColor:'#cbcbcb',
    borderBottomWidth:0.5,
  },
  avatar:{width:40,
    height:40,
    backgroundColor:"cyan",
    alignItems:"center",
    marginLeft:8,
    position:'absolute',
    borderRadius:5,
  },
});



const HomeNavScreen = createStackNavigator(
  {
    Home: HomeScreen,
    home_detail:detail,
  },
  {
    initialRouteName:'Home',
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
