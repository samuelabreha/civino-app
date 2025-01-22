const Easing = {
  bezier: () => 'bezier',
  linear: 'linear',
  ease: 'ease',
  quad: 'quad',
  cubic: 'cubic',
  poly: () => 'poly',
  sin: 'sin',
  circle: 'circle',
  exp: 'exp',
  elastic: 'elastic',
  back: 'back',
  bounce: 'bounce',
  bezierFn: () => 'bezierFn',
  in: () => 'easeIn',
  out: () => 'easeOut',
  inOut: () => 'easeInOut',
};

const Animated = {
  View: 'Animated.View',
  createAnimatedComponent: (component) => component,
  timing: () => ({
    start: (callback) => callback && callback()
  }),
  spring: jest.fn(),
  Value: function(value) {
    this.setValue = (newValue) => {
      this._value = newValue;
    };
    this._value = value;
  },
};

const Dimensions = {
  get: jest.fn().mockReturnValue({ width: 375, height: 667 }),
};

const StyleSheet = {
  create: (styles) => styles,
  hairlineWidth: 1,
  absoluteFill: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  absoluteFillObject: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  flatten: (style) => {
    if (Array.isArray(style)) {
      return Object.assign({}, ...style);
    }
    return style;
  },
};

const Platform = {
  OS: 'ios',
  select: (obj) => obj.ios,
  Version: 42,
};

module.exports = {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  View: 'View',
  Text: 'Text',
  Image: 'Image',
  ScrollView: 'ScrollView',
  TouchableOpacity: 'TouchableOpacity',
  TouchableWithoutFeedback: 'TouchableWithoutFeedback',
  Modal: 'Modal',
  ActivityIndicator: 'ActivityIndicator',
  TextInput: 'TextInput',
  Button: 'Button',
  Alert: {
    alert: jest.fn(),
  },
  AsyncStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  FlatList: 'FlatList',
};
