import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';

export default class Entrepreneuship extends Component {
  static navigationOptions = {
  title: 'ENTREPRENEUSHIP',
  
    headerTitleStyle :{flex:1,textAlign: 'center',alignSelf:'center' ,color:'#0099cc'},
    headertintColor:'#1E90FF',
    headerStyle:{
        backgroundColor:'white',
      
    },
};
    
  render() {
      const { width, height } = Dimensions.get('window')

    return (
        <View>
        
                <Text style={styles.container}>FIND PRACTICAL SOLUTIONS IMPROVE LOCAL ECONOMY BE YOUR MASTER. </Text>

              <Text style={styles.welcome}>Entrepreneurship Development Institute Of India. </Text>
        
              <Text style={styles.welcome}>Khadi And Village Industries Commission. </Text>
        
              <Text style={styles.welcome}>The Common Wealth Youth Credit InItiative.  </Text>
        
              <Text style={styles.welcome}>Rural Self Employment Training Institute.</Text>
        
              <Text style={styles.welcome}>Bharatiya Yuvashakthi Trust .</Text>
        
              <Text style={styles.welcome}>Indian institute of Entrepreneurship. </Text>
        
              <Text style={styles.welcome}>National Institute For Entrepreneurship And Small Business Development. </Text>
        
              <Text style={styles.welcome}>Centre for Entrepreneurship Development Institute Of Telengana.</Text>
        
              

        </View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
       padding:10,
    fontWeight: 'bold',
      alignItems: 'center',
       borderBottomColor: '#1D3E5E',
         borderBottomWidth: 0.5,
       
  },
  welcome: {
    padding:10,
       borderBottomColor: '#1D3E5E',
         borderBottomWidth: 0.5,
       

  },
 
});