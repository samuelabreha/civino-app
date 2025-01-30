import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/i18n/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store, persistor } from './src/redux/store'; 
import Home from './src/screens/Home';
import CreateProfile from './src/screens/CreateProfile';
import StatusEntry from './src/screens/StatusEntry';
import NameEntry from './src/screens/NameEntry';
import BehaviorContracts from './src/screens/BehaviorContracts';
import Questionnaires from './src/screens/Questionnaires';
import ImageEvaluation from './src/screens/ImageEvaluation';
import School from './src/screens/School';
import CommunityCenter from './src/screens/CommunityCenter';
import HomePage from './src/screens/HomePage';
import ProfileSelection from './src/screens/ProfileSelection';
import ChildProfile from './src/screens/ChildProfile';
import TeacherProfile from './src/screens/TeacherProfile';
import FincMonitorProfile from './src/screens/FincMonitorProfile';
import ParentProfile from './src/screens/ParentProfile';
import AdminProfile from './src/screens/AdminProfile';
import ReferentAnimator from './src/screens/ReferentAnimator';
import Questionnaire from './src/screens/Questionnaire';
import SelectDate from './src/screens/SelectDate';
import Calendar from './src/screens/Calendar';
import Navigation from './src/screens/Navigation';
import DownloadReport from './src/screens/DownloadReport';
import ProgressReport from './src/screens/ProgressReport';
import BehavioralStatistics from './src/screens/BehavioralStatistics';
import Overview from './src/screens/Overview';
import Child from './src/screens/Child';
import BehaviorContractsSchool from './src/screens/BehaviorContractsSchool';
import Teacher from './src/screens/Teacher';
import Documents from './src/screens/Documents';
import UploadDeleteDocuments from './src/screens/UploadDeleteDocuments';
import ObservationReports from './src/screens/ObservationReports';
import Contacts from './src/screens/Contacts';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateProfile" component={CreateProfile} />
                <Stack.Screen name="StatusEntry" component={StatusEntry} />
                <Stack.Screen name="NameEntry" component={NameEntry} />
                <Stack.Screen name="BehaviorContracts" component={BehaviorContracts} />
                <Stack.Screen name="Questionnaires" component={Questionnaires} />
                <Stack.Screen name="ImageEvaluation" component={ImageEvaluation} />
                <Stack.Screen name="School" component={School} />
                <Stack.Screen name="CommunityCenter" component={CommunityCenter} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ProfileSelection" component={ProfileSelection} />
                <Stack.Screen name="ChildProfile" component={ChildProfile} />
                <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
                <Stack.Screen name="FincMonitorProfile" component={FincMonitorProfile} />
                <Stack.Screen name="ParentProfile" component={ParentProfile} />
                <Stack.Screen name="AdminProfile" component={AdminProfile} />
                <Stack.Screen name="ReferentAnimator" component={ReferentAnimator} />
                <Stack.Screen name="Questionnaire" component={Questionnaire} />
                <Stack.Screen name="SelectDate" component={SelectDate} />
                <Stack.Screen name="Calendar" component={Calendar} />
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="DownloadReport" component={DownloadReport} />
                <Stack.Screen name="ProgressReport" component={ProgressReport} />
                <Stack.Screen name="BehavioralStatistics" component={BehavioralStatistics} />
                <Stack.Screen name="Overview" component={Overview} />
                <Stack.Screen name="Child" component={Child} />
                <Stack.Screen name="BehaviorContractsSchool" component={BehaviorContractsSchool} />
                <Stack.Screen name="Teacher" component={Teacher} />
                <Stack.Screen name="Documents" component={Documents} />
                <Stack.Screen name="UploadDeleteDocuments" component={UploadDeleteDocuments} />
                <Stack.Screen name="ObservationReports" component={ObservationReports} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Settings" component={Settings} />
              </Stack.Navigator>
            </NavigationContainer>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
