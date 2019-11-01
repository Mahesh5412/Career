import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class msw extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>Social Work Practice Sequence</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>HBSE Sequence</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>Social Welfare Policy and </Text>
          <Text style={styles.signUpText}>Service Sequence </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>Research Sequence</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>Field Sequence</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phd')} >
          
          <Text style={styles.signUpText}>Sequence Chairs and </Text>
           <Text style={styles.signUpText}>Coordinators</Text>
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Graduation</Text>

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
    backgroundColor: "#ba68c8",
           
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
