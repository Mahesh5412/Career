import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';


 
 export default class  MDN extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>M.DN</Text>

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
    marginTop:20,
    borderRadius:10,
  },
    signupButton: {
    backgroundColor: "#8bc34a",
     justifyContent: 'center',
      alignItems: 'center', 
           
  },
  contentview: {
    color: '#FFF',
  },
    
     signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },
     signup: {
        justifyContent: 'center',
      alignItems: 'center',
       color: 	"#FFF",
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
    
});