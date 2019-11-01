import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class MA extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Acc')} >
          
          <Text style={styles.signUpText}>Ancient History</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Agr')} >
          
          <Text style={styles.signUpText}>Animation</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}>Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Anth')} >
          
          <Text style={styles.signUpText}>Anthropology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Arc')} >
          
          <Text style={styles.signUpText}>Anti terrorism laws</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bich')} >
          
          <Text style={styles.signUpText}>Civil services</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Gruation</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Binfo')} >
          
          <Text style={styles.signUpText}>Cinematography</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
     
 <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bime')} >
          
          <Text style={styles.signUpText}>Environmental sciences</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Bitech')} >
          
          <Text style={styles.signUpText}>Food Nutrition</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Botany')} >
          
          <Text style={styles.signUpText}>Gender Studies</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Che')} >
          
          <Text style={styles.signUpText}>Geography</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Civil')} >
          
          <Text style={styles.signUpText}>Geology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Create')} >
          
          <Text style={styles.signUpText}>History of fine arts</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Econo')} >
          
          <Text style={styles.signUpText}>Human Development</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:2 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Ele')} >
          
          <Text style={styles.signUpText}>Military Science</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Ece')} >
          
          <Text style={styles.signUpText}>Philosophy</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
        
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Eng')} >
          
          <Text style={styles.signUpText}>Psychology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Env')} >
          
          <Text style={styles.signUpText}>Public Administration</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Fine')} >
          
          <Text style={styles.signUpText}>Intellectual Property Rights</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Future')} >
          
          <Text style={styles.signUpText}>Jain Study</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Gen')} >
          
          <Text style={styles.signUpText}>Music(Vocal)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Genet')} >
          
          <Text style={styles.signUpText}>Music(Instrumental)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Geo')} >
          
          <Text style={styles.signUpText}>Religious Studies</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('His')} >
          
          <Text style={styles.signUpText}>Rural Development</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Home')} >
          
          <Text style={styles.signUpText}>Social Work</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Alt')} >
          
          <Text style={styles.signUpText}>Statistics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Gem')} >
          
          <Text style={styles.signUpText}>Social Management</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Opth')} >
          
          <Text style={styles.signUpText}>Tourism Administration</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Oth')} >
          
          <Text style={styles.signUpText}>Yoga</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pha')} >
          
          <Text style={styles.signUpText}>Youth Empowerment</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Phs')} >
          
          <Text style={styles.signUpText}>Yoga and Naturopathy</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Psyc')} >
          
          <Text style={styles.signUpText}>Women's Studies</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Surg')} >
          
          <Text style={styles.signUpText}>Vastu shastra</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification:Graduation</Text>

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
boxseven:{
  flex:1,
},
boxseven:{
  flex:1,
},boxeight:{
  flex:1
}
});