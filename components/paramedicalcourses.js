import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class paramedicalcourses extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Medical Technology </Text>
 
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in operation Theatre Technology</Text>

    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Hospital Food  </Text>
          <Text style={styles.signUpText}>Service Management </Text>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Seramik Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in X-ray Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  


  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Dental Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  
     


  <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Medical Record Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Dialysis Technology</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxnine}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Dental Hygiene</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ParaDegree')} >
          
          <Text style={styles.signUpText}>Diploma in Optometry Technician</Text>
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