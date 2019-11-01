import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class iti extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Build')} >
          
          <Text style={styles.signUpText}>Building Maintenance</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Ec')} >
          
          <Text style={styles.signUpText}>Electronic Mechanics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}>Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Exca')} >
          
          <Text style={styles.signUpText}>Excavator Operator(Mining)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mech')} >
          
          <Text style={styles.signUpText}>Mechanic Repair and Maintenance of Vehicles</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('San')} >
          
          <Text style={styles.signUpText}>Sanitary Hardware fitter</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Arch')} >
          
          <Text style={styles.signUpText}>Architectural Assistant</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
     
 <View style={styles.boxseven}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Carp')} >
          
          <Text style={styles.signUpText}>Carpenter</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Paint')} >
          
          <Text style={styles.signUpText}>Painter</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Found')} >
          
          <Text style={styles.signUpText}>Foundry Man technician</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Gold')} >
          
          <Text style={styles.signUpText}>Gold Smith</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Interior')} >
          
          <Text style={styles.signUpText}>Interior Decoration and Designing</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/fail)</Text>

</View>
    </TouchableOpacity>
          </View>


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mason')} >
          
          <Text style={styles.signUpText}>Mason</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Marine')} >
          
          <Text style={styles.signUpText}>Marine Engine filter</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration:1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
 <View style={styles.boxeight}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Meau')} >
          
          <Text style={styles.signUpText}>Mechanic Auto Electrical and Electronics</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1-2 years </Text>
<Text style={styles.contentview}> Qualification:SSC(Pass/Fail)</Text>

</View>
    </TouchableOpacity>
          </View>

          


 </View>  
        
        
        </ScrollView>
        
    );
  }
}

class Buildscreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Build</Text>
      </View>
    );
  }
}


class Ecscreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>BipcScreen</Text>
      </View>
    );
  }
}



class Excascreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Excascreen</Text>
      </View>
    );
  }
}



class Mechscreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Mechscreen</Text>
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