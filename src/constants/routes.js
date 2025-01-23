export const ROUTES = {
  // Auth Stack
  AUTH: 'Auth',
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',

  // Main Stack
  MAIN: 'Main',
  HOME: 'Home',
  CHILD: 'Child',
  COMMUNITY: 'Community',
  CONTRACT: 'Contract',
  REFERENCE: 'Reference',
  SCHOOL: 'School',
  SETTINGS: 'Settings',
  TEACHER: 'Teacher',

  // Nested Stacks
  CHILD_DETAILS: 'ChildDetails',
  COMMUNITY_DETAILS: 'CommunityDetails',
  CONTRACT_DETAILS: 'ContractDetails',
  SCHOOL_DETAILS: 'SchoolDetails',
  TEACHER_DETAILS: 'TeacherDetails',
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
