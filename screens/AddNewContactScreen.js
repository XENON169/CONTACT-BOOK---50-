import React,{Component} from 'react';
import {
  FlatList, 
  TouchableOpacity, 
  ScrollView, 
  Text, 
  StyleSheet,
  Keyboard, 
  TouchableWithoutFeedback, 
  Alert, 
  AsyncStorage} from 'react-native';
import {Card, Form, Input, Label, Button, Item} from 'native-base';
import {Entypo} from '@expo/vector-icons';

export default class ADD_CONTACT extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fname:'',
      lname:'',
      email:'',
      phone:'',
      address:'',
    }
    }

    staticNavigationOptions = {title:"Contact App"}

    saveContact = async()=>{
        if(
          this.state.fname!=='' && 
          this.state.lname!=='' &&
          this.state.email!=='' &&
          this.state.phone!=='' &&
          this.state.address!==''
        ){
            //create content object
            var contact = {
              fname:this.state.fname,
              lname:this.state.lname,
              email:this.state.fname,
              phone:this.state.lname,
              address:this.state.address
            }
     await AsyncStorage.setItem(Date.now().toString(),JSON.stringify(contact))
     .then(()=>{
       this.props.navigation.goBack()
     })
     .catch(error=>{
       console.log("ERROR");
     })
        }

        else {Alert.alert("All Fields are Required")}

    }

    render(){

      return(

        <TouchableWithoutFeedback
        onPress={()=>{
          Keyboard.dismiss
        }}>
        
        <ScrollView style={styles.container}>

        <Form>

        <Item style={styles.inputItem}>

        <Label>First Name :</Label>

        <Input 
        autoCorrect={false}
        autoCapitalize="words"
        keyboardType="decimal-part"
        onChangeText={fname=>this.setState({fname})}
        />

        </Item>
        
        </Form>


        <Form> 
        <Item> 
        <Label>Last Name:</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="words"
        keyboardType="decimal-part"
        onChangeText={lname=>this.setState({lname})}
        />
        </Item> 
        </Form>

        <Form> 
        <Item> 
        <Label>E-MAIL:</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="decimal-part"
        onChangeText={email=>this.setState({email})}
        />
        </Item> 
        </Form>

        <Form> 
        <Item> 
        <Label>Phone No:</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={phone=>this.setState({phone})}
        />
        </Item> 
        </Form>

        <Form> 
        <Item> 
        <Label>Address:</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="street-address"
        keyboardType="decimal-part"
        onChangeText={address=>this.setState({address})}
        />
        </Item> 
        </Form>

         <Button style={styles.button} full onPress={()=>{this.saveContact()}}>
        <Text>SAVE !</Text>
        </Button>

        


        <TouchableOpacity style={styles.floatButton} 
        onPress={()=>{this.props.navigation.navigate("VIEW_CONTACT")}}>

        <Entypo
        name='add-user'
        size={47}
        color='yellow'/>

        </TouchableOpacity>
        </ScrollView>
        </TouchableWithoutFeedback>

        
      )
    }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'cyan'
  },
  floatButton:{
    marginTop:90,
    marginLeft:280
  }
})