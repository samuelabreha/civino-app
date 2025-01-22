import { Easing } from 'react-native';

const mockEasing = {
  bezier: () => () => {},
  linear: () => {},
  ease: () => {},
  quad: () => {},
  cubic: () => {},
  poly: () => {},
  sin: () => {},
  circle: () => {},
  exp: () => {},
  elastic: () => {},
  back: () => {},
  bounce: () => {},
  bezierFn: () => {},
  in: () => {},
  out: () => {},
  inOut: () => {},
};

export const animations = {
  // Duration values
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },

  // Easing functions
  easing: {
    standard: mockEasing.bezier(0.4, 0, 0.2, 1),
    accelerate: mockEasing.bezier(0.4, 0, 1, 1),
    decelerate: mockEasing.bezier(0, 0, 0.2, 1),
    sharp: mockEasing.bezier(0.4, 0, 0.2, 1),
  },

  // Common animation presets
  transitions: {
    fade: {
      duration: 200,
      easing: mockEasing.bezier(0.4, 0, 0.2, 1),
      property: 'opacity',
      useNativeDriver: true
    },
    scale: {
      duration: 200,
      easing: mockEasing.bezier(0.4, 0, 0.2, 1),
      property: 'transform',
      useNativeDriver: true
    },
    slide: {
      duration: 200,
      easing: mockEasing.bezier(0.4, 0, 0.2, 1),
      property: 'transform',
      useNativeDriver: true
    },
  },

  // Spring animations
  spring: {
    gentle: {
      tension: 120,
      friction: 14,
      useNativeDriver: true
    },
    default: {
      tension: 170,
      friction: 20,
      useNativeDriver: true
    },
    bouncy: {
      tension: 180,
      friction: 12,
      useNativeDriver: true
    },
  },

  // Screen transitions
  screenTransitions: {
    slide: {
      duration: 300,
      easing: mockEasing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true
    },
    modal: {
      duration: 400,
      easing: mockEasing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true
    }
  },

  // Component specific animations
  components: {
    button: {
      press: {
        duration: 100,
        easing: mockEasing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true
      },
      feedback: {
        duration: 200,
        easing: mockEasing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true
      }
    },
    card: {
      press: {
        duration: 150,
        easing: mockEasing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true
      }
    },
    input: {
      focus: {
        duration: 200,
        easing: mockEasing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: false
      }
    }
  }
};
