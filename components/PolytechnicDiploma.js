import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



export default class PolytechnicDiploma extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Mpc')} >
          
          <Text style={styles.signUpText}>Automobile Engineering</Text>
 
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bipc')} >
          
          <Text style={styles.signUpText}>Aeronautical Engineering</Text>

    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>Agricultural Engineering</Text>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcmg')} >
          
          <Text style={styles.signUpText}>Architectural Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Civil Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  


  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Mechanical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  
     


  <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Electrical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Electrical and Electronic's Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxnine}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Computer Science Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Textile Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxeleven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Corporate Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxtwelve}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Fashion Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxthirteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Interior Design</Text>
    </TouchableOpacity>
          </View>

 </View>
 

 <View style={styles.boxfourteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Library Science </Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxfifteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Telecommunication  </Text>
    </TouchableOpacity>
          </View>

 </View>  


        
        </ScrollView>
        
    );
  }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    
    
  },
     buttonContainer: {
    width: wp('95%'),
    height: hp('15%'),
    justifyContent: 'center',
          alignItems: 'center',
    
    marginTop:20,
    borderRadius:10,
  },
    signupButton: {
    backgroundColor: "#03a9f4",
           
  },
    signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },
    contentview: {
    color: '#FFF',
  },
    
    textcontain: {
           flexDirection: 'row',
        justifyContent:'space-between',
  },
     signup: {
      alignItems: 'center',
     
  },
 boxone:{
    flex:1,  
        
},
     boxtwo:{
       flex:1,
         
},
    boxthree:{
       flex:1,
         
},
     boxfour:{
       flex:1,
         
}, boxfive:{
       flex:1,
         
}, boxsix:{
       flex:1,
         
},
});