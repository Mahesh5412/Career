import React from 'react';
import { View ,Text, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Details from './Details';
import Intermediate from './Intermediate';
import InterScieceGroups from './InterScienceGroups';
import InterArtsGroups from './InterArtsGroups';
import InterCommerceGroups from './InterCommerceGroups';
import CompitiveExamsJObs from './CompetitiveExamJobs';
import Graduation from './Graduation';
import Degree from './Degree'


const Dashboard = createStackNavigator({
  
  Dashboard:Home,
  Intermediate: Intermediate,
  IndrustrialCourses: Intermediate,
  Graduation: Intermediate,
  PGPHD: Intermediate,
  Entrepreneurship: Intermediate,
  CompitiveExamsJObs: Intermediate,


  Home:Intermediate,
  Science: InterScieceGroups,
  Arts: InterArtsGroups,
  Commerce: InterCommerceGroups,
  CompitiveExamsJObs: CompitiveExamsJObs,
  Graduation: Graduation,
  DEGREE: Degree,
  
});

export default createAppContainer(Dashboard);