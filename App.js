import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/i18n/i18n';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavigator from './src/navigation/AppNavigator';
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

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Router>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/create-profile' component={CreateProfile} />
                <Route path='/status-entry' component={StatusEntry} />
                <Route path='/name-entry' component={NameEntry} />
                <Route path='/behavior-contracts' component={BehaviorContracts} />
                <Route path='/questionnaires' component={Questionnaires} />
                <Route path='/image-evaluation' component={ImageEvaluation} />
                <Route path='/school' component={School} />
                <Route path='/community-center' component={CommunityCenter} />
                <Route path='/home' component={HomePage} />
                <Route path='/profile-selection' component={ProfileSelection} />
                <Route path='/child-profile' component={ChildProfile} />
                <Route path='/teacher-profile' component={TeacherProfile} />
                <Route path='/finc-monitor-profile' component={FincMonitorProfile} />
                <Route path='/parent-profile' component={ParentProfile} />
                <Route path='/admin-profile' component={AdminProfile} />
                <Route path='/referent-animator' component={ReferentAnimator} />
                <Route path='/questionnaire' component={Questionnaire} />
                <Route path='/select-date' component={SelectDate} />
                <Route path='/calendar' component={Calendar} />
                <Route path='/navigation' component={Navigation} />
                <Route path='/download-report' component={DownloadReport} />
                <Route path='/progress-report' component={ProgressReport} />
                <Route path='/behavioral-statistics' component={BehavioralStatistics} />
                <Route path='/overview' component={Overview} />
                <Route path='/child' component={Child} />
                <Route path='/behavior-contracts-school' component={BehaviorContractsSchool} />
                <Route path='/teacher' component={Teacher} />
                <Route path='/documents' component={Documents} />
                <Route path='/upload-delete-documents' component={UploadDeleteDocuments} />
                <Route path='/observation-reports' component={ObservationReports} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/settings' component={Settings} />
              </Switch>
            </Router>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
