import React, { Component } from 'react';
import { AppRegistry, View ,Text, TouchableOpacity,StyleSheet, Alert, Image} from 'react-native';
import { colors } from 'react-native-elements';

export default class Home extends Component {
    render() {
      return (
        <View>
               

               <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                style={styles.Intermediate}
                onPress={() => {this.props.navigation.navigate('Intermediate')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.IntermediateText}>Intermediate</Text>
                </TouchableOpacity>
               


                <TouchableOpacity 
                style={styles.Industrial}
                onPress={() => {this.props.navigation.navigate('IndrustrialCourses')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.IndutstrialText}>Industrial</Text>
                </TouchableOpacity>
                </View>


                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                style={styles.Graduation}
                onPress={() => {this.props.navigation.navigate('Graduation')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.GraduationText}>Graduation</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.PGPHD}
                onPress={() => {this.props.navigation.navigate('PGPHD')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.PGPHDText}>PG/PHD</Text>
                </TouchableOpacity>
                </View>


                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                style={styles.Entrepreneurship}
                onPress={() => {this.props.navigation.navigate('Entrepreneurship')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.EntrepreneurshipText}>Entrepreneurship</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.CompetitiveExamJobs}
                onPress={() => {this.props.navigation.navigate('CompitiveExamsJObs')}}>
                <Image source = {require('./image/inter.png')}
                style={{marginLeft:50,marginTop:40}}
                />
                <Text style={styles.CompetitiveExamJobsText}>Competitive Exam Jobs</Text>
                </TouchableOpacity>
                </View>
             


            
             
           


     </View>





      );
    }
  }

  const styles = StyleSheet.create({

    Intermediate: {
      backgroundColor: '#8bc34a',
      marginTop:10,
      marginLeft:10,
      width:180,
    },
    Industrial: {
      backgroundColor: '#03a9f4',
      marginTop:10,
      marginLeft:20,
      width:180,
    },
    Graduation: {
      backgroundColor: '#ff8a65',
      marginTop:10,
      marginLeft:10,
      width:180,
    },
    PGPHD: {
      backgroundColor: '#ba68c8',
      marginTop:10,
      marginLeft:20,
      width:180,
    },
    Entrepreneurship: {
      backgroundColor: '#7bdcb5',
      marginTop:10,
      marginLeft:10,
      width:180,
    },
    CompetitiveExamJobs: {
      backgroundColor: '#d8e847',
      marginTop:10,
      marginLeft:20,
      width:180,
    },
 

    IntermediateText:{
   
        paddingBottom:30,
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
    IndutstrialText:{
      paddingBottom:30,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    GraduationText:{
      paddingBottom:30,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    PGPHDText:{
      paddingBottom:30,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    EntrepreneurshipText:{
      paddingBottom:30,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    CompetitiveExamJobsText:{
      paddingBottom:30,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
 
  });