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
            width: 886,
            paddingTop: 40,
            paddingRight: 48,
            paddingBottom: 40,
            paddingLeft: 48,
            gap: 36,
            alignItems: 'center',
            flexWrap: 'nowrap',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 999,
            borderTopRightRadius: 999,
            borderBottomRightRadius: 999,
            borderBottomLeftRadius: 999,
            position: 'relative',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: 96,
              paddingTop: 24,
              paddingRight: 24,
              paddingBottom: 24,
              paddingLeft: 24,
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              flexWrap: 'nowrap',
              backgroundColor: '#fe4e11',
              borderTopLeftRadius: 1998,
              borderTopRightRadius: 1998,
              borderBottomRightRadius: 1998,
              borderBottomLeftRadius: 1998,
              position: 'relative',
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <ImageBackground
                style={{
                  width: 48,
                  height: 48,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
                source={require('./assets/images/77909151-d540-47ce-9bbd-3b6fa0120469.png')}
                resizeMode='cover'
              />
            </View>
          </View>
          <Text
            style={{
              height: 90,
              flexShrink: 0,
              flexBasis: 'auto',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: 72,
              fontWeight: '500',
              lineHeight: 90,
              color: '#121212',
              letterSpacing: -1.44,
              position: 'relative',
              textAlign: 'left',
              zIndex: 3,
            }}
            numberOfLines={1}
          >
            Onboarding
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
