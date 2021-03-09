import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

export default class HomeScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      show:false

    };
  }
  SignUp = (email, password) => {
  
      
      firebase.auth().createUserWithEmailAndPassword(email, password)
        this.props.navigation.navigate("About");
  };

  SignIn = (email, password) => {
   
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate("About");
      })
  }
  renderButton(){
    if(this.state.show){
return(
      <View style={styles.btnContainer}>
    <Button  success style={{width:120,backgroundColor:'black'}}
    onPress={() => this.SignIn(this.state.email, this.state.password)}
    >
      <Text style={{color:'white',fontSize:20,}}>SignIn</Text>
    </Button>
    <Button  success style={{ width:120,backgroundColor:'black'}}
    onPress={() => this.SignUp(this.state.email, this.state.password)}
    > 
    <Text style={{color:'white',fontSize:20, }}>Signup</Text>
    </Button>
    </View>
      );}
  }

  render(){
  return (
    <Container style={styles.container}>
     <View style={styles.iconCont}>     
<Icon
  name='email'
  size={60}
  color='#fff' />
  </View>  
  <Text style={styles.mainText}>Your email address?</Text>

        <Form>

        <Item floatingLabel>
            <Label style={styles.label}>Email</Label>
            <Input
            
              onChangeText={email => this.setState({ email,
              show:true })}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>Password</Label>
            <Input
             
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          

        </Form>

    {this.renderButton()}
      </Container>
  );
}
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:150,
  },

  iconCont:{
    backgroundColor:'#4ddee3',
    alignSelf:'center',
    width:90,
    height:90,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50

  },
  mainText:{
    textAlign:'center',
    fontSize:20,
    paddingTop:30
  },
  label:{
    paddingLeft:30
  },
  btnContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    width:'100%',
    backgroundColor:'black',
    color:'white',
    padding:20
  }
  
});
