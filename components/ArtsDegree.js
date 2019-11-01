import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default  class ArtsDegree extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('BAPG')} >
          
          <Text style={styles.signUpText}>B.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years Eligibility:35% </Text>


</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>D.Ed</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years Eligibility: 35% </Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MSWNEW')} >
          
          <Text style={styles.signUpText}>B.S.W</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years Eligibility: 45%</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('LLMNEW')} >
          
          <Text style={styles.signUpText}>L.L.B</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years ,Eligibility: 40% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Foreign Language Diploma</Text>

<View style={styles.textcontain}>



</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.B.M </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years, Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
     
        <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.B.A </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years, Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
    <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.H.M </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years, Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Fashion Designing & Diploma </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1 or 2 years </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Interial Designing Diploma </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years , Eligibility: 45% </Text>


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
    backgroundColor: "#ff8a65",
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