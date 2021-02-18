import React,{Component} from 'react';
import {
  AsyncStorage, 
  FlatList, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet} from 'react-native';
import {Card} from 'native-base';
import {Entypo} from '@expo/vector-icons';

export default class HOME_VIEW extends React.Component{

  staticNavigationOptions = {title:"Contact App"}

  constructor(props){
    super(props);
    this.state = {data:[]}
    }

    render(){

      return(
        <View style={styles.container}>

        <TouchableOpacity style={styles.floatButton} 
        onPress={()=>{this.props.navigation.navigate("ADD_CONTACT")}}>

        <Entypo
        name='home'
        size={47}
        color='green'
        align='center'/>

        </TouchableOpacity>

        </View>
      )
    }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'cyan'
  },

  floatButton:{
    marginTop:400,
    marginLeft:280
  }
})