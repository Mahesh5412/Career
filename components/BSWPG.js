import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export  default class BSWPG extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Mpc')} >
          
          <Text style={styles.signUpText}>M.S.W</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>


</View>

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
    backgroundColor: "#00A2C1",
justifyContent: 'center',
          alignItems: 'center',
           
  },
    signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFF',
   justifyContent: 'center',
          alignItems: 'center',
  },
    contentview: {
    color: '#FFF',
justifyContent: 'center',
          alignItems: 'center',

  },
DOWN: {
    color: '#FFF',
justifyContent: 'center',
          alignItems: 'center',

  },
    
    textcontain: {
           flexDirection: 'column',
        justifyContent:'space-between',
justifyContent: 'center',
          alignItems: 'center',

  },
     signup: {
     justifyContent: 'center',
          alignItems: 'center',
     
  },
 boxone:{
    flex:1,
 justifyContent: 'center',
          alignItems: 'center',  
        
},
     boxtwo:{
       flex:1,
 justifyContent: 'center',
          alignItems: 'center',
         
},
    boxthree:{
       flex:1,
 justifyContent: 'center',
          alignItems: 'center',
         
},
     boxfour:{
       flex:1,
 justifyContent: 'center',
          alignItems: 'center',
         
}, boxfive:{
       flex:1,
 justifyContent: 'center',
          alignItems: 'center',
         
}, boxsix:{
       flex:1,
 justifyContent: 'center',
          alignItems: 'center',
         
},
});