const Easing = {
  bezier: () => {},
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

const withSpring = () => {};
const withTiming = () => {};
const withDelay = () => {};
const withSequence = () => {};
const withRepeat = () => {};

const useSharedValue = (initialValue) => ({
  value: initialValue,
});

const useAnimatedStyle = () => ({});
const useAnimatedProps = () => ({});
const useDerivedValue = () => ({});
const useAnimatedScrollHandler = () => ({});
const useAnimatedGestureHandler = () => ({});
const useAnimatedReaction = () => {};

const createAnimatedComponent = (component) => component;

const View = require('react-native').View;
const Text = require('react-native').Text;
const Image = require('react-native').Image;
const ScrollView = require('react-native').ScrollView;

const AnimatedView = View;
const AnimatedText = Text;
const AnimatedImage = Image;
const AnimatedScrollView = ScrollView;

module.exports = {
  Easing,
  withSpring,
  withTiming,
  withDelay,
  withSequence,
  withRepeat,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  useDerivedValue,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  createAnimatedComponent,
  View: AnimatedView,
  Text: AnimatedText,
  Image: AnimatedImage,
  ScrollView: AnimatedScrollView,
};
