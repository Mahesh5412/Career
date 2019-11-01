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
import Degree from './Degree';
import Btech from './Btech';
import Bpharmacy from './Bpharmacy';
import IndrustrialCourses from './IndustrialCourses';
import gtrt from './gtrt';
import iti from './iti';
import nttf from './nttf';
import toyota from './toyota';
import paramedicalcourses from './paramedicalcourses';
import DistanceLaerning from './DistanceLearning';
import BoschTechnicalTrainingCenter from './BoschTechnicalTrainingCenter';
import VocationalCourese from './VocationalCourses';
import PolytechnicDiploma from './PolytechnicDiploma';
import UnnathiSchemeCourse from './UnnathiSchemeCourse';
import SchneiderElectricIndiaFoundation from './SchneiderElectricIndiaFoundation';
import Finearts from './Finearts';
import pgphd from './pgphd';
import Pg from './Pg';
import Mtech from './Mtech';
import MA from './MA';
import Mpharmacy from './Mpharmacy';
import Phd from './Phd';
import msw from './msw';
import mfa from './mfa';
import llm from './llm';
import Med from './Med';
import Mcom from './Mcom';
import PostDiploma from './PostDiploma';
import Mds from './Mds';
import Mba from './Mba';
import Entrepreneuship from './Entrepreneuship';
import EnglishChart from './EnglishChart';
import TeluguChart from './TeluguChart';
import ScienceDegree from './ScienceDegree';
import CommerceDegree from './commercedegree';
import ParaDegree from  './ParaDegree';
import ArtsDegree  from './ArtsDegree';
import BAPG from './BAPG';
import BSWPG from './BSWPG';
import MAPHD from './MAPHD';
import BEDMED from './BEDMED';
import LLMPHD from './LLMPHD';
import PCBHSDEGREE from './PCBHSDEGREE';
import BSCPG from './BSCPG';
import MSCPHD from './MSCPHD';
import PCMGDEGREE from './PCMGDEGREE';
import PCMSDEGREE from './PCMSDEGREE';
import PCMEDEGREE from './PCMEDEGREE';
import Job from './job';
import Interindus from './Interindus';
import BSCMSC from './BSCMSC';
import MCA from './MCA';
import MTECHNEW from './MTECHNEW';
import MBANEW from './MBANEW';
import MPHARMACYNEW from './MPHARMACYNEW';
import MDN from './MDN';
import MD from './MD';
import March from './March';
import MEDNEW from './MEDNEW';
import MSWNEW from './MSWNEW';
import LLMNEW from './LLMNEW';
import DistanceDegree from './DistanceDegree';
import PolyDegree from './PolyDegree';
import MSCNEW from './MSCNEW';
import POSTDIPLOMANEW from './POSTDIPLOMANEW';




const Dashboard = createStackNavigator({

  Dashboard: { 
    screen: Home,
    navigationOptions: {
        header: null,
    },
  },
  //Dashboard:Home,
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
  BTECH: Btech,
  BPHARMACY: Bpharmacy,
  IndrustrialCourses: IndrustrialCourses,
  GTRT: gtrt,
  ITI: iti,
  NTTF: nttf,
  TOYOTA: toyota,
  PARAMEDICALCOURSES: paramedicalcourses,
  DISTANCELEARNING: DistanceLaerning,
  BoschTechnicalTrainingCenter:BoschTechnicalTrainingCenter,
  VocationalCourese: VocationalCourese,
  PolytechnicDiploma:PolytechnicDiploma,
  UnnathiSchemeCourse:UnnathiSchemeCourse,
  SchneiderElectricIndiaFoundation:SchneiderElectricIndiaFoundation,
  Finearts: Finearts,
  PGPHD: pgphd,
  PG: Pg,
  Mtech: Mtech,
  MA: MA,
  Mpharmacy: Mpharmacy,
  Phd: Phd,
  MSW: msw,
  MFA:mfa,
  LLM:llm,
  Med: Med,
  MCOM: Mcom,
  PostDiploma: PostDiploma,
  MDS: Mds,
  Mba: Mba,
  MCA: MCA,
  Entr: Entrepreneuship,
  EnglishChart: EnglishChart,
  TeluguChart: TeluguChart,
  ScienceDegree: ScienceDegree,
  CommerceDegree:CommerceDegree,
  ParaDegree: ParaDegree,
  ArtsDegree :ArtsDegree ,
  BAPG: BAPG,
  BSWPG: BSWPG,
  MAPHD: MAPHD,
  BEDMED: BEDMED,
  LLMPHD: LLMPHD,
  PCBHSDEGREE: PCBHSDEGREE,
  BSCPG: BSCPG,
  MSCPHD: MSCPHD,
  PCMGDEGREE: PCMGDEGREE,
  PCMSDEGREE: PCMSDEGREE,
  PCMEDEGREE: PCMEDEGREE,
  Job:Job,
  Interindus:Interindus,
  BSCMSC:BSCMSC,
  MTECHNEW:MTECHNEW,
  MBANEW:MBANEW,
  MPHARMACYNEW: MPHARMACYNEW,
  MDN:MDN,
  MD:MD,
  March:March,
  MEDNEW:MEDNEW,
  MSWNEW: MSWNEW,
  LLMNEW: LLMNEW,
  DistanceDegree:DistanceDegree,
  PolyDegree:PolyDegree,
  MSCNEW: MSCNEW,
  POSTDIPLOMANEW: POSTDIPLOMANEW,
});

export default createAppContainer(Dashboard);