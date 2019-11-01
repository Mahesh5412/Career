import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity ,ScrollView} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {createStackNavigator, createAppNavigator} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';


export default class CommerceDegree extends Component {
    
   
  render() {
    
      return (
              
<ScrollView style={styles.container}>
          

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>ICWA</Text>

<Text style={styles.contentview}>(from the institute of cost and work accountant) </Text>

    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>CS</Text>

<Text style={styles.contentview}>(from the institute of company secretaries of india) </Text>

    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>CFA</Text>

<Text style={styles.contentview}>(chartered financial analyst) </Text>

    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>CA</Text>

<Text style={styles.contentview}>(chartered accountant) </Text>

    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.COM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Eligibility : 35% </Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.B.M</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Eligibility : 50% </Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.C.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Eligibility : 50% </Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.H.M</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Eligibility : 50% </Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   


<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>L.L.B</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Eligibility : 50% </Text>

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
    width: wp('94%'),
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
    
});
