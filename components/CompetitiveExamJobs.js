import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Competitivescreen extends Component {
  static navigationOptions = {
    title: 'COMPETITIVE EXAM JOBS',
  
    headerTitleStyle :{flex:1,textAlign: 'center',alignSelf:'center' ,color:'#0099cc'},
    headertintColor:'#1E90FF',
    headerStyle:{
        backgroundColor:'white',
      
    },
};
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>UPSC</Text>
<Text style={styles.contentview}>(IAS,IPS&IFS) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : GRADUATE</Text>

</View>
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>BANKING</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : GRADUATE</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>

          
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>CLAT</Text>
          <Text style={styles.signUpText}>(Common Law Admission Test)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : INTERMEDIATE</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


  
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>SDA</Text>
          <Text style={styles.signUpText}>(Second Division Assistant)</Text>


<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : INTERMEDIATE</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


  
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>POLICE,RAILWAYS</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : INTERMEDIATE</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


  
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>BPO</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}> Qualification : INTERMEDIATE</Text>

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
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    borderRadius:10,
  },
    signupButton: {
    backgroundColor: "#bcd100",
           
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
    
});