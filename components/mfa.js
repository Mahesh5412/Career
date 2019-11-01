import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class mfa extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Mpc')} >
          
          <Text style={styles.signUpText}>Acting, Theater, and Stage</Text>
          <Text style={styles.signUpText}>Management</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bipc')} >
          
          <Text style={styles.signUpText}>Ceramics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>Computer animation, animation</Text>
          <Text style={styles.signUpText}> and graphic design</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcmg')} >
          
          <Text style={styles.signUpText}>Creative writing and Dramatic writing</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Drawing and Illustration</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Painting and Sculpture</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
     
        
        

 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Photography</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>


 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Interior design</Text>

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