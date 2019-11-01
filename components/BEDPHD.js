import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';


 
 export default class BEDPHD extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('ArtsDegree')} >
          
          <Text style={styles.signUpText}>M.Ed</Text>
          <Text style={styles.contentview}>(Duration: 1 year)</Text>


    </TouchableOpacity>
                  
          </View>
 </View>      
        
 

 
 
        
        
        </ScrollView>
        
    );
  }
}

class MpcScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>MpcScreen</Text>
      </View>
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
    marginTop:20,
    borderRadius:10,
  },
    signupButton: {
    backgroundColor: "#ba68c8",
     justifyContent: 'center',
      alignItems: 'center', 
           
  },
     signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },
     signup: {
        justifyContent: 'center',
      alignItems: 'center',
       color: 	"#FFF",
  },

  contentview: {
    color: '#FFF',
justifyContent: 'center',
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
    
});