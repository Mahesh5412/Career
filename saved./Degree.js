import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Degree extends Component{
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Cec')} >
          
          <Text style={styles.signUpText}>B.SC</Text>
<Text style={styles.contentview}>(phy,che,math,elec.,cs) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Mec')} >
          
          <Text style={styles.signUpText}>NDA</Text>
<Text style={styles.contentview}>(army,navy,airforce) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
       </View>




     
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.ARCH</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
 </View>   


     
<View style={styles.boxfour}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>TECHNICAL ENTRY IN INDIAN ARMY</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   



<View style={styles.boxfive}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.E</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   




<View style={styles.boxsix}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>BCA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxseven}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>FILM AND TELEVISION DIPLOMA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxeight}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>BBM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxnine}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>BHM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxten}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>BSc</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxeleven}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>BCA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   





<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.ARCH</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.FARM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :4 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.A.M.S</Text>
<Text style={styles.contentview}>(Ayurvedic) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5 yrs(4.5 Academic+1 Internship) </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.D.S</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>M.B.B.S</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5yrs(4.5 Acad+1 Intern) </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.S.C</Text>
<Text style={styles.contentview}>Duration :(Agriculture,Surgical) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.H.M.S</Text>
<Text style={styles.contentview}>Homeopathy </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5.5yrs(4.4Acad+1Intern) </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.V.S.C</Text>
<Text style={styles.contentview}>(Veteran) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>PARAMEDICAL COURSES</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>M.S.C</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.ED</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>L.L.B</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>L.B.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.SC</Text>
<Text style={styles.contentview}>(Homeoscience) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.SC</Text>
<Text style={styles.contentview}>(Zoology) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.SC</Text>
<Text style={styles.contentview}>(Statistics) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.SC</Text>
<Text style={styles.contentview}>(Physics,Chemistry,Electronics,Computer Science) </Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>ICWA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>CS</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>CFA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>CA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        



<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.COM</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.B.M</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.C.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.H.M</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.A</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>D.ED</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>L.L.B</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :5 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>B.S.W</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>FOREIGN LANGUAGE DIPLOMA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>FASHION DESIGNING DIPLOMA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :1 or 2 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

</View>
    </TouchableOpacity>
          </View>
   </View>   

        

        

<View style={styles.boxtwelve}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Pcbhs')} >
          
          <Text style={styles.signUpText}>INTERIOR DESIGNING DIPLOMA</Text>

<View style={styles.textcontain}>
<Text style={styles.contentview}>Duration :3 years </Text>
<Text style={styles.contentview}> Qualification : Intermediate</Text>

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
    
    marginBottom:10,
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