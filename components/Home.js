import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { AppRegistry, View ,Text,Linking, TouchableOpacity,StyleSheet,TouchableHighlight, Alert, Dimensions,Image} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Icon,Title,Button,Container,Content,Header,Right,Left,Body,Tab, Tabs, TabHeading,Footer,FooterTab} from 'native-base';

export default class Home extends Component {
    render() {
      return (
        <View style={{flex: 1,justifyContent: 'space-around',}}>
               <Header 

           style={{
          backgroundColor: '#FFF', 
         // height: 80,
          width: Dimensions.get('window').width, 
          //borderBottomColor: '#F79D17',
          justifyContent: 'space-between', height:80,
      
        }}>
           <Left>
                 
          </Left>
          <Body>
          <ResponsiveImage source = {require('./image/clientl.png')}
          initWidth="250"
           initHeight="70"
               
                />

          </Body>
          <Right>
                 
                 </Right>


        </Header>
       


               <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Intermediate}
               
                onPress={() => {this.props.navigation.navigate('Interindus')}}>
                 <Image source = {require('./image/study.png')}
                style={{marginTop:10}}
                />
             
                <Text style={styles.IntermediateText}>SSC</Text>
                </TouchableOpacity>
               


                <TouchableOpacity 
                style={styles.Industrial}
                onPress={() => {this.props.navigation.navigate('Interindus')}}>
                 <Image source = {require('./image/industrial.png')}
                style={{marginTop:10}}
                />
                
                <Text style={styles.IndutstrialText}>Inter/Industrial</Text>
                </TouchableOpacity>
                </View>


                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Graduation}
                
                onPress={() => {this.props.navigation.navigate('Graduation')}}>
                  <Image source = {require('./image/inter.png')}
                                  style={{marginTop:10}}
                                  />
                <Text style={styles.GraduationText}>Graduation</Text>

{/* <Image source={require('./images/grad.png')} 
        style={{width:30,height:30}}/> */}
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.PGPHD}
                onPress={() => {this.props.navigation.navigate('PGPHD')}}>
                 <Image source = {require('./image/pg.png')}
                style={{marginTop:10}}
                />
              
                <Text style={styles.PGPHDText}>PG/PHD</Text>
                </TouchableOpacity>
                </View>


                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Entrepreneurship}
                onPress={() => {this.props.navigation.navigate('Entr')}}>
                 <Image source = {require('./image/entr.png')}
                style={{marginTop:10}}
                />
                
                <Text style={styles.EntrepreneurshipText}>Entrepreneurship</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.CompetitiveExamJobs}
                onPress={() => {this.props.navigation.navigate('CompitiveExamsJObs')}}>
                 <Image source = {require('./image/exams.png')}
                style={{marginTop:10}}
                />
                
                <Text style={styles.CompetitiveExamJobsText}>Competitive Exam Jobs</Text>
                </TouchableOpacity>
                </View>
             
          <View style={{ flex: 0.8,width:wp('95%'),height: hp('5%'),alignItems: 'center',justifyContent: 'center',}}>

            
          <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                
                <Text>Available career awareness chart : </Text>
                <TouchableOpacity 
                style={styles.english}
                onPress={() => {this.props.navigation.navigate('EnglishChart')}}>
                <Text style={styles.english}>English | </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.telugu}
                onPress={() => {this.props.navigation.navigate('TeluguChart')}}>
                <Text style={styles.telugu}>Telugu</Text>
                </TouchableOpacity>
                </View>

                {/* <Image source = {require('./image/cadl.png')}
                style={{width:260,height:80}}/> */}

               
              
              
<TouchableHighlight 
  onPress={() => Linking.openURL('https://cadrac.com')}>
 <ResponsiveImage source = {require('./image/cadl.png')}
          initWidth="95"
           initHeight="27"
           
               />
</TouchableHighlight>
              
              
              
               {/* <TouchableOpacity>


              

               <ResponsiveImage source = {require('./image/clogo3.jpeg')}
          initWidth="250"
           initHeight="55"
           
               />
                 
               </TouchableOpacity> */}
               
          
            </View>
            

     </View>





      );
    }
  }

  const styles = StyleSheet.create({

    SSC: {
      
      backgroundColor: '#8bc34a',
     
      width:wp('45%'),
      height: hp('5%'),
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    Intermediate: {
      backgroundColor: '#8bc34a',
     // marginTop:10,
      //marginLeft:10,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    Industrial: {
      backgroundColor: '#03a9f4',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    Graduation: {
      backgroundColor: '#ff8a65',
      //marginTop:10,
      //marginLeft:10,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    PGPHD: {
      backgroundColor: '#ba68c8',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    Entrepreneurship: {
      backgroundColor: '#30b27e',
      //marginTop:10,
      //marginLeft:10,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    CompetitiveExamJobs: {
      backgroundColor: '#b1bf33',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
 

    IntermediateText:{
        // paddingTop:70,
        // paddingBottom:70,
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
    IndutstrialText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    GraduationText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    PGPHDText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    EntrepreneurshipText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    CompetitiveExamJobsText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    telugu:{
      color:'#03a9f4',
    }, 
    english:{
      color:'#03a9f4',
    },
 
  });
	
	
