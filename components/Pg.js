import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  createStackNavigator,
  createAppNavigator,
  createAppContainer,
} from 'react-navigation';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';

export default class Pg extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxone}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Mtech')}>
              <Text style={styles.signUpText}>M.Tech</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : BE/B.Tech</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxtwo}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Phd')}>
              <Text style={styles.signUpText}>M.Sc</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : BSc/BHMS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxthree}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('MCOM')}>
              <Text style={styles.signUpText}>M.Com</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : BHM/PHM/BBM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxfour}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('MSW')}>
              <Text style={styles.signUpText}>MSW</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : BSW</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxfive}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Mpharmacy')}>
              <Text style={styles.signUpText}>M.Pharmacy</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : B.Pharm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxsix}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Job')}>
              <Text style={styles.signUpText}>M.Arch</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : B.Arch</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.boxseven}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('MA')}>
              <Text style={styles.signUpText}>M.A</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}> Qualification : B.A</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Mba')}>
              <Text style={styles.signUpText}>MBA</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : B.Com/BBA/B.SC/BHM/LLB</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>





        <View style={styles.boxnine}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Job')}>
              <Text style={styles.signUpText}>MCA</Text>
              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : BCA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Phd')}>
              <Text style={styles.signUpText}>MMC</Text>
              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : BSc</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('MFA')}>
              <Text style={styles.signUpText}>MFA</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :3 years </Text>
                <Text style={styles.contentview}>Qualification : BFA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('MDS')}>
              <Text style={styles.signUpText}>MDS</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : BDS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
       
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Job')}>
              <Text style={styles.signUpText}>MD</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification : MBBS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('Med')}>
              <Text style={styles.signUpText}>M.ED</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :1 years </Text>
                <Text style={styles.contentview}>Qualification : B.ED</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

         <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('LLM')}>
              <Text style={styles.signUpText}>LLM</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification :LLB</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.boxeight}>
          <View style={styles.signup}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => this.props.navigation.navigate('PostDiploma')}>
              <Text style={styles.signUpText}>Post Diploma</Text>

              <View style={styles.textcontain}>
                <Text style={styles.contentview}>Duration :2 years </Text>
                <Text style={styles.contentview}>Qualification :LLB</Text>
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

    marginTop: 20,
    borderRadius: 10,
  },
  signupButton: {
    backgroundColor: '#ba68c8',
  },
  signUpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
  },
  contentview: {
    color: '#FFF',
  },

  textcontain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signup: {
    alignItems: 'center',
  },
  boxone: {
    flex: 1,
  },
  boxtwo: {
    flex: 1,
  },
  boxthree: {
    flex: 1,
  },
  boxfour: {
    flex: 1,
  },
  boxfive: {
    flex: 1,
  },
  boxsix: {
    flex: 1,
  },
   boxseven: {
    flex: 1,
  },
   boxeight: {
    flex: 1,
  },
  boxnine: {
    flex: 1,
  },
});