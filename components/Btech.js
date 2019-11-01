import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Btech extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Aerospace Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Computer Science Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electrical Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Civil Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Communication </Text>
          <Text style={styles.signUpText}>Engineering </Text>
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
     
        <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Information Technology  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
    <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Aeronautical Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Automobile Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Automation and Robotics </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electrical and Electronics</Text>
          <Text style={styles.signUpText}>Engineering</Text>
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electrical and Communications</Text>
          <Text style={styles.signUpText}>Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechatronics Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Computer</Text>
          <Text style={styles.signUpText}>Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Chemical Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Telecommunication</Text>
          <Text style={styles.signUpText}>Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Aircraft Manufacturing and </Text>
          <Text style={styles.signUpText}>Maintenance Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Petroleum Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Information and Communication</Text>
          <Text style={styles.signUpText}>Technology </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biotechnology Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Instrumentation</Text>
          <Text style={styles.signUpText}>Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics Engineering   </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Automotive Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Applied Electronics and</Text>
          <Text style={styles.signUpText}>Instrumentation Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Agricultural and Food Engineering </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Petrochemical Engineering  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Building and Construction</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Nuclear Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics Control</Text>
          <Text style={styles.signUpText}>Systems Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Power</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Industrial Design </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Civil and Structural Engineering  </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mining Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics and Electrical</Text>
          <Text style={styles.signUpText}>Communication </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Metallurgical Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biomedical Engineering   </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biotechnology and Biochemical</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical and Automation</Text>
          <Text style={styles.signUpText}>Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical and Industrial</Text>
          <Text style={styles.signUpText}>Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Energy Management </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Agricultural Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Textile Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electrical and Instrumentation</Text>
          <Text style={styles.signUpText}>Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Genetic Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Safety and Occupational </Text>
          <Text style={styles.signUpText}>Health Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Food Technology </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biological Sciences and </Text>
          <Text style={styles.signUpText}>Bioengineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Environmental Engineering  </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Construction Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Construction Technology</Text>
          <Text style={styles.signUpText}>and Management </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mathematics and Computing</Text>
          <Text style={styles.signUpText}>Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical Automobile </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Chemical and Polymer</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Industrial and Production</Text>
          <Text style={styles.signUpText}>Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Instrumentation Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Water Management </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical Production</Text>
          <Text style={styles.signUpText}>Engineering </Text>

 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Civil Environmental</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Transportation Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biochemical Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Geo informatics </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mechanical Engineering-</Text>
          <Text style={styles.signUpText}>Design and Manufacturing </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Geotechnical Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Electronics Product</Text>
          <Text style={styles.signUpText}>Design Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Leather Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Power Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Ceramics and Cement</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Information Science Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Marine Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Nano Technology Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Bio-Medical and Instrumentation</Text>
          <Text style={styles.signUpText}> Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Bio Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Nano Technology and Robotics </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Food Processing and</Text>
          <Text style={styles.signUpText}> Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Instrumentation and Control</Text>
          <Text style={styles.signUpText}> Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Instrumentation and Control</Text>
          <Text style={styles.signUpText}>Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Water Management</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Telecommunication </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Medical Electronics </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Naval Architecture and </Text>
          <Text style={styles.signUpText}>  Marine Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Naval Architecture </Text>
          <Text style={styles.signUpText}> and OceanEngineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Food and Biochemical Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Textile Technology </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Industrial Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Production Engineering and </Text>
          <Text style={styles.signUpText}>Management </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Production Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Systems Science Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Mineral Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Safety and Fire Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Thermal Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Geosciences and Remote Sensing</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Polymer Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Planning Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Jute and Fiber Technology</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Fashion and Apparel Engineering </Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}> Mining Machinery Engineering</Text>
 
<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : 10+2</Text>

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
    
    textcontain: {
           flexDirection: 'row',
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