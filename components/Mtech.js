import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



export default class Mtech extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Computer Networks </Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Advances in OS</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Advanced Database Management  </Text>
          <Text style={styles.signUpText}> System </Text>

          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Computer System Performance </Text>
          <Text style={styles.signUpText}> Analysis</Text>

          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Formal Models in Computer Science</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  


  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Advanced Algorithms</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  
     


  <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Advanced Computer Architecture</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Cloud Computing</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxnine}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Information Security</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Advances in DIP</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Computer Graphics and </Text>
          <Text style={styles.signUpText}>Visualization</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  


 

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Optical Networks</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  



 

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Embedded Systems</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  

        

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Topics in Multimedia </Text>
          <Text style={styles.signUpText}>Communications</Text>

          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Artificial intelligence & </Text>
          <Text style={styles.signUpText}>Agent Theory</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  

 

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Protocol Engineering</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  
        



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Wireless and Cellular Networks</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  
        
        
 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Advances in pattern classification</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>
          </View> 

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Data Mining and Warehousing</Text>
          <Text style={styles.contentview}>CSE </Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>VLSI System Design</Text>
          <Text style={styles.contentview}>ECE</Text>
    </TouchableOpacity>
          </View>

 </View>  
        

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Communication & IT</Text>
          <Text style={styles.contentview}>ECE</Text>
    </TouchableOpacity>
          </View>

 </View>  
        


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Embedded Systems</Text>
          <Text style={styles.contentview}>ECE</Text>
    </TouchableOpacity>
          </View>

 </View>  
        


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Robotics</Text>
          <Text style={styles.contentview}>ECE</Text>
    </TouchableOpacity>
          </View>

 </View>  
        

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Wireless Communication</Text>
          <Text style={styles.contentview}>ECE</Text>
    </TouchableOpacity>
          </View>

 </View>  
        

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Mechanical Design</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  
        

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Industrial Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Production Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Thermal Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Thermal and Fluids Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Design Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Manufacturing Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Nuclear Engineering</Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Thermal Science and Engg </Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Mechanical Systems  </Text>
          <Text style={styles.signUpText}>Dynamics & Control </Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Fluid Mechanics and </Text>
          <Text style={styles.signUpText}>Thermal Sciences </Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>
 



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Robotics and Mechatronics </Text>
          <Text style={styles.contentview}>Mech</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Signal Processing</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Power Electronics </Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Communications </Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Nanotechnology</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Embedded Systems</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Biomedical Imaging</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Nanotechnology</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Power Systems Engineering</Text>
          <Text style={styles.contentview}>EEE</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Structural Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Design Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Bridge Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Offshore Design Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Offshore Construction Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Structural Consultant</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  

 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Forensic Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcms')} >
          
          <Text style={styles.signUpText}>Construction Engineer</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Engineer in P</Text>
          <Text style={styles.contentview}>Civil</Text>
    </TouchableOpacity>
          </View>

 </View>  


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Power Electronics & Drives</Text>
          <Text style={styles.contentview}>EIE</Text>
    </TouchableOpacity>
          </View>

 </View> 


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}> Power Systems Engineering</Text>
          <Text style={styles.contentview}>EIE</Text>
    </TouchableOpacity>
          </View>

 </View> 


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Instrumentation & Control Systems</Text>
          <Text style={styles.contentview}>EIE</Text>
    </TouchableOpacity>
          </View>

 </View> 


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Computer Controlled Industrial Power</Text>
          <Text style={styles.contentview}>EIE</Text>
    </TouchableOpacity>
          </View>

 </View>
 


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}> Intake Aerodynamics</Text>
          <Text style={styles.contentview}> Aeronautical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 
 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}> Unmanned and Autonomous Air Vehicle</Text>
          <Text style={styles.contentview}> Aeronautical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 


 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}> Structural Design & Optimization</Text>
          <Text style={styles.contentview}> Aeronautical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}> Fluid-Structure Interactions</Text>
          <Text style={styles.contentview}> Aeronautical Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 




 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Propulsion</Text>
          <Text style={styles.contentview}>Aerospace Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Structures, Structural Dynamics</Text>
          <Text style={styles.signUpText}>& Aeroelasticity</Text>
          <Text style={styles.contentview}>Aerospace Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Flight Mechanics and Control</Text>
          <Text style={styles.contentview}>Aerospace Engineering</Text>
    </TouchableOpacity>
          </View>

 </View>
 



 <View style={styles.boxten}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPHD')} >
          
          <Text style={styles.signUpText}>Aerodynamics</Text>
          <Text style={styles.contentview}>Aerospace Engineering</Text>
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