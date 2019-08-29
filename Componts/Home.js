import React, {Component} from 'react';
import {
    Text,
  StyleSheet,
  View,
} from 'react-native';



class DetailsScreen extends React.Component {

    static navigationOptions = {  
        title: 'Detail',//在导航中显示的标题内容
        };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
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

// export default DetailsScreen;

module.exports = DetailsScreen;

  
// export default createAppContainer(AppNavigator);






