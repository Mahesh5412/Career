import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class VocationalCourese extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Mpc')} >
          
          <Text style={styles.signUpText}>Agriculture</Text>
 
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bipc')} >
          
          <Text style={styles.signUpText}>Engineering</Text>

    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>Technology</Text>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcmg')} >
          
          <Text style={styles.signUpText}>Computer Science</Text>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Business And Commerce</Text>
    </TouchableOpacity>
          </View>

 </View>  


  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Home Science And Humanities</Text>
    </TouchableOpacity>
          </View>

 </View>  
     


  <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Agriculture Science</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Interior Design</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxnine}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Fire And Safety</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Hotel Management</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxeleven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Footware Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxtwelve}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Dairy Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  


 
 <View style={styles.boxthirteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Fisheries Science</Text>
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
          
          <Text style={styles.signUpText}>Electrical Technician</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxsixteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Baker Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxseventeen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Beautysan</Text>
    </TouchableOpacity>
          </View>

 </View>
 


 <View style={styles.boxeighteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Computer Hardware</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxnineteen}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>DTP</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxtwenty}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Tule</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxtwentyone}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Machinist Training Course</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxtwentytwo}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Rental Management Course</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxtwentythree}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Screen Painting</Text>
    </TouchableOpacity>
          </View>

 </View>  

 <View style={styles.boxtwentyfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Two Wheeler Servicing</Text>
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