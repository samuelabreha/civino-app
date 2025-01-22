import '@testing-library/jest-native/extend-expect';

// Mock react-native
jest.mock('react-native', () => ({
  Platform: {
    OS: 'web',
    select: jest.fn(obj => obj.web)
  },
  StyleSheet: {
    create: styles => styles,
    hairlineWidth: 1
  },
  Dimensions: {
    get: jest.fn().mockReturnValue({ width: 375, height: 812 }),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  },
  Animated: {
    View: 'Animated.View',
    Text: 'Animated.Text',
    createAnimatedComponent: component => component,
    timing: jest.fn(),
    spring: jest.fn(),
    sequence: jest.fn(),
    parallel: jest.fn(),
    Value: jest.fn(() => ({
      setValue: jest.fn(),
      interpolate: jest.fn()
    }))
  },
  TouchableOpacity: 'TouchableOpacity',
  TouchableWithoutFeedback: 'TouchableWithoutFeedback',
  TextInput: 'TextInput',
  Text: 'Text',
  View: 'View',
  ScrollView: 'ScrollView',
  ImageBackground: 'ImageBackground',
  Image: 'Image',
  Alert: {
    alert: jest.fn()
  },
  Keyboard: {
    dismiss: jest.fn()
  },
  SafeAreaView: 'SafeAreaView'
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn()
}));

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  PanGestureHandler: 'PanGestureHandler',
  State: {},
  gestureHandlerRootHOC: jest.fn()
}));

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => ({
  View: 'Reanimated.View',
  Text: 'Reanimated.Text',
  createAnimatedComponent: component => component,
  useAnimatedStyle: () => ({}),
  withSpring: jest.fn(),
  withTiming: jest.fn(),
  useSharedValue: jest.fn(() => ({ value: 0 })),
  withSequence: jest.fn(),
  withDelay: jest.fn(),
  Easing: {
    bezier: jest.fn(),
    linear: jest.fn(),
    ease: jest.fn()
  }
}));
