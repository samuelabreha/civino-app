import { Easing } from 'react-native';

export const animations = {
  // Timing configurations
  timing: {
    quick: 150,
    base: 200,
    medium: 300,
    slow: 400,
  },

  // Easing functions
  easing: {
    standard: Easing.bezier(0.4, 0.0, 0.2, 1),
    accelerate: Easing.bezier(0.4, 0.0, 1, 1),
    decelerate: Easing.bezier(0.0, 0.0, 0.2, 1),
    sharp: Easing.bezier(0.4, 0.0, 0.6, 1),
  },

  // Common animation presets
  transitions: {
    fade: {
      duration: 200,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      property: 'opacity',
      useNativeDriver: true
    },
    scale: {
      duration: 200,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      property: 'transform',
      useNativeDriver: true
    },
    slide: {
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
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
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: true
    },
    modal: {
      duration: 400,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: true
    }
  },

  // Component specific animations
  components: {
    button: {
      press: {
        duration: 100,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true
      },
      feedback: {
        duration: 200,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true
      }
    },
    card: {
      press: {
        duration: 150,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true
      }
    },
    input: {
      focus: {
        duration: 200,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false
      }
    }
  }
};
