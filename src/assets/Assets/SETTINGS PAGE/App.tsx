/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            display: 'flex',
            width: 153,
            paddingTop: 12,
            paddingRight: 12,
            paddingBottom: 12,
            paddingLeft: 12,
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            position: 'relative',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <ImageBackground
            style={{
              width: 20,
              height: 20,
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
            source={require('./assets/images/2ecf7c28-0052-40f7-9630-09b5b0f88981.png')}
            resizeMode='cover'
          />
          <Text
            style={{
              height: 18,
              flexShrink: 0,
              flexBasis: 'auto',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 18,
              color: '#fd4d4f',
              letterSpacing: -0.14,
              position: 'relative',
              textAlign: 'left',
              zIndex: 1,
            }}
            numberOfLines={1}
          >
            Delete Contact
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
