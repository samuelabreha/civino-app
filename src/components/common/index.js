export { Button } from './Button';
export { CustomInput } from './CustomInput';
export { Form } from './Form';
export { List, ListItem } from './List';
export { ScreenWrapper } from './ScreenWrapper';

// Composants d'état
export const LoadingState = ({ style }) => (
  <View style={[sharedStyles.loading, style]}>
    <ActivityIndicator color={colors.primary.main} />
  </View>
);

export const EmptyState = ({ message, style }) => (
  <View style={[sharedStyles.empty, style]}>
    <Text style={sharedStyles.emptyText}>{message}</Text>
  </View>
);

// Composants de mise en page
export const Row = ({ children, spaceBetween, style }) => (
  <View
    style={[
      sharedStyles.row,
      spaceBetween && sharedStyles.spaceBetween,
      style,
    ]}
  >
    {children}
  </View>
);

export const Card = ({ children, gradient, style }) => {
  if (gradient) {
    return (
      <LinearGradient
        colors={colors.background.gradient.primary}
        style={[sharedStyles.cardGradient, style]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {children}
      </LinearGradient>
    );
  }

  return <View style={[sharedStyles.card, style]}>{children}</View>;
};
