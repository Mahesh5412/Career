import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Phd extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Accounting and Finance</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD in Agriculture</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}>Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Anthropology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Archaeology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Biochemistry</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Bioinformatics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
     
 <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Bio medical Life sciences</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Biotechnology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Botany</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Chemical Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Civil Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Creative Writing</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Economics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Electrical Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Electronics and</Text>
          <Text style={styles.signUpText}>Communication Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
        
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in English</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Environmental Sciences</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Fine arts</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Future and Development Studies</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in General Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Genetics Engineering</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Geography and Geology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in History</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Home Science</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Alternate Medicine</Text>
          <Text style={styles.signUpText}>and Counselling</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Gem')} >
          
          <Text style={styles.signUpText}>PhD. in General Medicine</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Opthamology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Other Medicine</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Pharmacy</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Physiotherapy,Occupational</Text>
          <Text style={styles.signUpText}>Health and Ergonomics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Phsychology and</Text>
          <Text style={styles.signUpText}>Mental Health</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>PhD. in Surgery</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3-6 years </Text>
<Text style={styles.contentview}> Qualification:PG</Text>

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
