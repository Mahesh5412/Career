import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Bpharmacy extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Human Anatomy & Physiology</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Biochemistry</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Pharmaceutical Maths & Biostatistics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : SSC</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>Pharmaceutical Biotechnology</Text>

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
    backgroundColor: "#ff8a65",
           
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