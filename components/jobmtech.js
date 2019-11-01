

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




 export default class Job extends Component{
  render() {
    return (
        
<View style={styles.container}>
 <View style={styles.boxone}>
      
          
<Image source={require('./image/JOB.png')} 
        style={{width:250,height:250 ,alignItems:'center',justifyContent:'center'}}/>
      
         

                  
          </View>  
        
        
       </View>

       
        
    );
  }
}



const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:250,
    
  },
 boxone:{
    flex:1,  
        

         
},
});
