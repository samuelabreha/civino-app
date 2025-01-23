export const ROUTES = {
  // Auth Stack
  AUTH: 'Auth',
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',

  // Main Stack
  MAIN: 'Main',
  HOME: 'Home',
  
  // Profile Creation
  PROFILE_CREATION: 'ProfileCreation',
  STATUS_INPUT: 'StatusInput',
  NAME_INPUT: 'NameInput',
  FIRSTNAME_INPUT: 'FirstnameInput',
  BEHAVIOR_CONTRACTS: 'BehaviorContracts',
  QUESTIONNAIRES: 'Questionnaires',
  PROGRESS_REPORT: 'ProgressReport',

  // Profile Selection
  PROFILE_SELECTION: 'ProfileSelection',
  CHILD_PROFILE: 'ChildProfile',
  TEACHER_PROFILE: 'TeacherProfile',
  FINC_MONITOR_PROFILE: 'FincMonitorProfile',
  PARENT_PROFILE: 'ParentProfile',
  ADMIN_PROFILE: 'AdminProfile',

  // Referent Animator
  REFERENT_ANIMATOR: 'ReferentAnimator',
  QUESTIONNAIRE: 'Questionnaire',
  IMAGE_EVALUATION: 'ImageEvaluation',
  BEHAVIORAL_STATS: 'BehavioralStats',
  OVERVIEW: 'Overview',

  // Child Section
  CHILD: 'Child',
  BEHAVIOR_CONTRACTS: 'BehaviorContracts',
  DAILY_QUESTIONNAIRE: 'DailyQuestionnaire',
  CHILD_PROGRESS: 'ChildProgress',
  CHILD_STATS: 'ChildStats',
  CHILD_OVERVIEW: 'ChildOverview',

  // Teacher Section
  TEACHER: 'Teacher',
  TEACHER_QUESTIONNAIRE: 'TeacherQuestionnaire',
  TEACHER_EVALUATION: 'TeacherEvaluation',
  TEACHER_PROGRESS: 'TeacherProgress',
  TEACHER_STATS: 'TeacherStats',
  TEACHER_OVERVIEW: 'TeacherOverview',

  // FINC Monitor
  FINC_MONITOR: 'FincMonitor',
  MONITOR_QUESTIONNAIRE: 'MonitorQuestionnaire',
  MONITOR_EVALUATION: 'MonitorEvaluation',
  MONITOR_PROGRESS: 'MonitorProgress',
  MONITOR_STATS: 'MonitorStats',
  MONITOR_OVERVIEW: 'MonitorOverview',

  // Documents
  DOCUMENTS: 'Documents',
  DOCUMENT_UPLOAD: 'DocumentUpload',
  DOCUMENT_CALENDAR: 'DocumentCalendar',
  OBSERVATION_REPORTS: 'ObservationReports',
  WEEKLY_OBSERVATIONS: 'WeeklyObservations',
  MONTHLY_OBSERVATIONS: 'MonthlyObservations',
  MONTHLY_SUMMARY: 'MonthlySummary',
  IMPROVEMENT_POINTS: 'ImprovementPoints',
  DOCUMENTATION: 'Documentation',

  // Contacts
  CONTACTS: 'Contacts',
  CONTACT_LIST: 'ContactList',
  ADD_CONTACT: 'AddContact',
  DELETE_CONTACT: 'DeleteContact',

  // Settings
  SETTINGS: 'Settings',
  LANGUAGE_SELECTION: 'LanguageSelection',
  NOTIFICATIONS: 'Notifications',
  ACCOUNT_MANAGEMENT: 'AccountManagement',
};

export const SCREEN_OPTIONS = {
  headerShown: false,
  animation: 'slide_from_right',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
};
