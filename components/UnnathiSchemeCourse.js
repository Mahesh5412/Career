import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class UnnathiSchemeCourse extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>RETAIL SALES, GUEST CARE</Text>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mec')} >
          
          <Text style={styles.signUpText}>INDUSTRAIL TAILORING</Text>

    </TouchableOpacity>
          </View>
       </View>

        

  
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mec')} >
          
          <Text style={styles.signUpText}>PAINTING, DATA ENTRY</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration : 3 months </Text>
<Text style={styles.contentview}> Qualification : SSC PASS/FAIL</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>

        
 
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mec')} >
          
          <Text style={styles.signUpText}>BEAUTICIAN</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration : 3 months </Text>
<Text style={styles.contentview}> Qualification : SSC PASS/FAIL</Text>

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
    
});