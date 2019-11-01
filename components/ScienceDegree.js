import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default  class ScienceDegree extends Component {
  render() {
    return (
        
<ScrollView style={styles.container}>



     
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('BSCMSC')} >
          
          <Text style={styles.signUpText}>B.S.C</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years Eligibility: 60% </Text>
<Text style={styles.DOWN}> (Physics,Chemistry,Maths,Biology)</Text>

</View>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MCA')} >
          
          <Text style={styles.signUpText}>B.C.A  </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years Eligibility: 50% </Text>

</View>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.Arch</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years Eligibility: 70%</Text>

</View>
    </TouchableOpacity>
          </View>


      
 </View>   
  <View style={styles.boxfour}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Technical Entry In Indian Army </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Eligibility: 70% </Text>
<Text style={styles.DOWN}> (Physics,Chemistry,Maths)</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxfive}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>N.D.A</Text>

<View style={styles.textcontain}>

<Text style={styles.DOWN}> (Army,Navy,AirForce)</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
  <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Film & Telivision Diploma </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years, Eligibility: 30% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
     
        <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MTECHNEW')} >
          
          <Text style={styles.signUpText}>B.E </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years, Eligibility: 70% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
    <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.B.M </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years, Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MBANEW')} >
          
          <Text style={styles.signUpText}>B.H.M </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years , Eligibility: 50%</Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MPHARMACYNEW')} >
          
          <Text style={styles.signUpText}>B.Pharm </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years , Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>B.M.S </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5 years ,Ayurvedham</Text>
<Text style={styles.contentview}> Eligibility: 8.5%  Qualification : 10+2</Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('NF')} >
          
          <Text style={styles.signUpText}>B.D.S</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('MD')} >
          
          <Text style={styles.signUpText}>M.B.B.S</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5 years, Eligibility: 8.5% </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
   
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPG')} >
          
          <Text style={styles.signUpText}>B.S.C</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years,Eligibility: 8.5% </Text>
<Text style={styles.DOWN}>(BioTech,Nursing,Botnoy,Biology,Zoology</Text>
<Text style={styles.DOWN}>HomeScience)</Text>
</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('BSCPG')} >
          
          <Text style={styles.signUpText}>B.S.C Agriculture,Sericultural</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years,Eligibility: 50% </Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>B.H.M.S(Homeopathy)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5 years,Eligibility: 8.5% </Text>

</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>B.V.S.C(Veterinary Science)</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years ,Eligibility: 50%</Text>


</View>
    </TouchableOpacity>
          </View>

 </View>  
 <View style={styles.boxsix}>
      <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Job')} >
          
          <Text style={styles.signUpText}>Para Medical Course</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years,Eligibility: 50% </Text>
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
DOWN: {
    color: '#FFF',
justifyContent: 'center',
          alignItems: 'center',

  },
    
    textcontain: {
           flexDirection: 'column',
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