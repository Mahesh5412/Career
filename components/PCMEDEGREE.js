import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class PCMEDEGREE extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 

    
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPG')} >
          
          <Text style={styles.signUpText}>B.Sc</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:60% </Text>
<Text style={styles.contentview}>Courses:MPC,Electroncis,Computers</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


       <View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>N.D.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:60% </Text>
<Text style={styles.contentview}>Courses:MPC,Electroncis,Computers</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>



        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('March')} >
          
          <Text style={styles.signUpText}>B.Arch</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:60% </Text>


</View>
    </TouchableOpacity>
          </View>


      
 </View>   

 <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Technical Entry in Indian army</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>10+2 System of education with min aggregate </Text>
<Text style={styles.contentview}> aggregate 70 % in physics , chemistry , maths </Text>


</View>
    </TouchableOpacity>
          </View>

          </View>




  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>B.E</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MCA')} >
          
          <Text style={styles.signUpText}>BCA</Text>

<Text style={styles.contentview}>Duration:3 years,Eligibility:50% </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>BBM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:50% </Text>
<Text style={styles.subjectview}> </Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
     
 <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>BHM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:50% </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Film and Television Diploma</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 
          
          
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Paint')} >
          
          <Text style={styles.signUpText}>Technical Entry in indian army</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3 years,Eligibility:70% </Text>
<Text style={styles.contentview}> Qualification:10+2</Text>

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
boxseven:{
  flex:1,
},
boxseven:{
  flex:1,
},boxeight:{
  flex:1
}
});