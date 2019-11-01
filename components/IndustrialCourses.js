import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class IndustrialCourses extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('DISTANCELEARNING')} >
          
          <Text style={styles.signUpText}>Distance Learning</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1 year </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('PolytechnicDiploma')} >
          
          <Text style={styles.signUpText}>Polytechnic Diploma</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('PARAMEDICALCOURSES')} >
          
          <Text style={styles.signUpText}>Para Medical courses</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2-3 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('ITI')} >
          
          <Text style={styles.signUpText}>ITI</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('VocationalCourese')} >
          
          <Text style={styles.signUpText}>Vocational Courses</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('NTTF')} >
          
          <Text style={styles.signUpText}>NTTF</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-4 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
     
 <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('GTRT')} >
          
          <Text style={styles.signUpText}>GTRT</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-4 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('TOYOTA')} >
          
          <Text style={styles.signUpText}>Toyota Kirloskar</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-4 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BoschTechnicalTrainingCenter')} >
          
          <Text style={styles.signUpText}>Bosch Technical Training Center</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('SchneiderElectricIndiaFoundation')} >
          
          <Text style={styles.signUpText}>Schneider Electric India foundation</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('UnnathiSchemeCourse')} >
          
          <Text style={styles.signUpText}>Unnathi scheme courses </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 Months </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Finearts')} >
          
          <Text style={styles.signUpText}>Fine arts</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
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
boxseven:{
  flex:1,
},
boxseven:{
  flex:1,
},boxeight:{
  flex:1
}
});