import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class DistanceLaerning extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Bachelor Preparatory Programme</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :6 Months </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Certification Programs in Computing, </Text> 
          <Text style={styles.signUpText}>Teaching,of </Text> 
           <Text style={styles.signUpText}>English Guidence Design</Text> 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :6 Months -1 Year</Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Diploma Foreign Languages Film </Text>
          <Text style={styles.signUpText}> making Managemnet</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('DistanceDegree')} >
          
          <Text style={styles.signUpText}>Certificate Courses NGO  </Text>
          <Text style={styles.signUpText}>Management</Text>
        
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :6 Months</Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

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
    height: hp('25%'),
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
         
},
});