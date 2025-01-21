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
            gap: 100,
            alignItems: 'center',
            flexWrap: 'nowrap',
            position: 'relative',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <LinearGradient
            colors={['#fae8bd', '#ffffff']}
            useAngle={true}
            angle={180}
            style={{
              display: 'flex',
              width: 393,
              height: 852,
              alignItems: 'flex-start',
              flexShrink: 0,
              flexWrap: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 2,
                }}
              />
              <Text
                style={{
                  display: 'flex',
                  height: 18,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro Text',
                  fontSize: 15,
                  fontWeight: '600',
                  lineHeight: 17.9,
                  color: '#000000',
                  letterSpacing: -0.17,
                  position: 'absolute',
                  top: '50%',
                  left: 48.5,
                  textAlign: 'left',
                  zIndex: 10,
                  transform: [{ translateY: -9 }],
                }}
                numberOfLines={1}
              >
                5:13
              </Text>
              <View
                style={{
                  width: 24.347,
                  height: 13,
                  position: 'absolute',
                  top: 15,
                  left: 336,
                  zIndex: 3,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 4,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/f9c0a3b6-500b-4c8c-b7a2-00936ba33a35.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 16,
                    height: 13,
                    backgroundColor: '#000000',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 4,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 5,
                  }}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 13,
                    height: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'SF Pro Text',
                    fontSize: 10,
                    fontWeight: '700',
                    lineHeight: 13,
                    color: '#ffffff',
                    letterSpacing: 0.06,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    textAlign: 'center',
                    zIndex: 7,
                    transform: [{ translateY: -6.5 }, { translateX: -8.17 }],
                  }}
                  numberOfLines={1}
                >
                  76
                </Text>
                <ImageBackground
                  style={{
                    width: 1.348,
                    height: 4.058,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 6,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/01447698-d21c-42ea-a70e-575ee92b71cd.png')}
                  resizeMode='cover'
                />
              </View>
              <ImageBackground
                style={{
                  width: '4.16%',
                  height: '25.86%',
                  position: 'absolute',
                  top: '34.09%',
                  left: '80.15%',
                  zIndex: 8,
                }}
                source={require('./assets/images/9e1dd35d-5319-4605-b007-9a00e5432d0b.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 9,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/45d870aa-14cd-418e-aa3e-5864c2701ba0.png')}
                resizeMode='cover'
              />
            </View>
            <View
              style={{
                display: 'flex',
                paddingTop: 16,
                paddingRight: 20,
                paddingBottom: 16,
                paddingLeft: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 11,
              }}
            >
              <ImageBackground
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 12,
                }}
                source={require('./assets/images/29b74e94-4e29-46b2-9e1a-04dfc31f7efe.png')}
                resizeMode='cover'
              />
              <Text
                style={{
                  display: 'flex',
                  width: 183,
                  height: 44,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 13,
                }}
              >
                Select {'\n'}Behavioral Contracts
              </Text>
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 14,
                }}
              >
                <ImageBackground
                  style={{
                    width: 15.5,
                    height: 7.5,
                    position: 'relative',
                    zIndex: 15,
                    marginTop: 8.25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 4.25,
                  }}
                  source={require('./assets/images/5ee823ad-16ec-45bb-8840-3a0de92432ec.png')}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                paddingTop: 24,
                paddingRight: 20,
                paddingBottom: 24,
                paddingLeft: 20,
                gap: 24,
                alignItems: 'center',
                alignSelf: 'stretch',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: '0',
                flexWrap: 'nowrap',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 16,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 24,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'wrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 17,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 18,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 19,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 20,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/491e15a9-d71a-4868-9d34-8bcc64d3b69c.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 21,
                    }}
                    numberOfLines={1}
                  >
                    Image Assessment
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 26,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 27,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 28,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/4c9d2d72-6d11-44d4-942d-beb217f23ebd.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 132,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 29,
                    }}
                  >
                    Neighborhood House
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 34,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 35,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 36,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/2746f813-5a96-4d91-9d80-66a15ee4aac0.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 132,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      overflow: 'hidden',
                      zIndex: 37,
                    }}
                  >
                    Community{'\n'}Center
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 22,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 23,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 24,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/6c5e66bd-3bb6-4792-b18e-a5349d76d7c5.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 25,
                    }}
                    numberOfLines={1}
                  >
                    School
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 30,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 31,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 32,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/85d9b705-0566-422c-a605-9e7b343dc1d5.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 33,
                    }}
                    numberOfLines={1}
                  >
                    Home
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 16,
                  paddingRight: 8,
                  paddingBottom: 16,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#e5e5e5',
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                  borderBottomRightRadius: 40,
                  borderBottomLeftRadius: 40,
                  position: 'relative',
                  zIndex: 38,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 63,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 17.64,
                    color: '#999999',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 39,
                  }}
                  numberOfLines={1}
                >
                  Continue
                </Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#fae8bd', '#ffffff']}
            useAngle={true}
            angle={180}
            style={{
              display: 'flex',
              width: 393,
              height: 852,
              alignItems: 'flex-start',
              flexShrink: 0,
              flexWrap: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 40,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 41,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 42,
                }}
              />
              <Text
                style={{
                  display: 'flex',
                  height: 18,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro Text',
                  fontSize: 15,
                  fontWeight: '600',
                  lineHeight: 17.9,
                  color: '#000000',
                  letterSpacing: -0.17,
                  position: 'absolute',
                  top: '50%',
                  left: 48.5,
                  textAlign: 'left',
                  zIndex: 50,
                  transform: [{ translateY: -9 }],
                }}
                numberOfLines={1}
              >
                5:13
              </Text>
              <View
                style={{
                  width: 24.347,
                  height: 13,
                  position: 'absolute',
                  top: 15,
                  left: 336,
                  zIndex: 43,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 44,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/be1f4a7c-cdfc-4f02-aa22-602e24043019.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 16,
                    height: 13,
                    backgroundColor: '#000000',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 4,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 45,
                  }}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 13,
                    height: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'SF Pro Text',
                    fontSize: 10,
                    fontWeight: '700',
                    lineHeight: 13,
                    color: '#ffffff',
                    letterSpacing: 0.06,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    textAlign: 'center',
                    zIndex: 47,
                    transform: [{ translateY: -6.5 }, { translateX: -8.17 }],
                  }}
                  numberOfLines={1}
                >
                  76
                </Text>
                <ImageBackground
                  style={{
                    width: 1.348,
                    height: 4.058,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 46,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/ea52ba61-cecd-4bcf-9c87-0c22ea9abd50.png')}
                  resizeMode='cover'
                />
              </View>
              <ImageBackground
                style={{
                  width: '4.16%',
                  height: '25.86%',
                  position: 'absolute',
                  top: '34.09%',
                  left: '80.15%',
                  zIndex: 48,
                }}
                source={require('./assets/images/11596749-1c22-40ab-ad5f-595bd2daeede.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 49,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/88864443-5b0a-480d-b360-8553ac14e5de.png')}
                resizeMode='cover'
              />
            </View>
            <View
              style={{
                display: 'flex',
                paddingTop: 16,
                paddingRight: 20,
                paddingBottom: 16,
                paddingLeft: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 51,
              }}
            >
              <ImageBackground
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 52,
                }}
                source={require('./assets/images/2d7b15aa-8221-4089-8431-1330b5f81457.png')}
                resizeMode='cover'
              />
              <Text
                style={{
                  display: 'flex',
                  width: 183,
                  height: 44,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 53,
                }}
              >
                Select {'\n'}Behavioral Contracts
              </Text>
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 54,
                }}
              >
                <ImageBackground
                  style={{
                    width: 15.5,
                    height: 7.5,
                    position: 'relative',
                    zIndex: 55,
                    marginTop: 8.25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 4.25,
                  }}
                  source={require('./assets/images/d52553b6-d869-4b52-ab7a-829b4972a350.png')}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                paddingTop: 24,
                paddingRight: 20,
                paddingBottom: 24,
                paddingLeft: 20,
                gap: 24,
                alignItems: 'center',
                alignSelf: 'stretch',
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: '0',
                flexWrap: 'nowrap',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 56,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 24,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'wrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 57,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 58,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 59,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 60,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/e14e53ac-4034-4790-a69e-1b351954772a.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 61,
                    }}
                    numberOfLines={1}
                  >
                    Image Assessment
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 66,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 67,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 68,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/c94efa11-3115-4c2a-b5dd-11b4fa7f13b4.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 132,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 69,
                    }}
                  >
                    Neighborhood House
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 74,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 75,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 76,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/6db45b75-6e8e-4e4d-b2df-0d520199f0e0.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 132,
                      height: 36,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      overflow: 'hidden',
                      zIndex: 77,
                    }}
                  >
                    Community{'\n'}Center
                  </Text>
                </View>
                <LinearGradient
                  colors={['#ffe6ac', 'rgba(255, 225, 157, 0.26)']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 62,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 63,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 64,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/796dad5c-f47c-447b-baf7-a42047ef00b7.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 65,
                    }}
                    numberOfLines={1}
                  >
                    School
                  </Text>
                </LinearGradient>
                <View
                  style={{
                    display: 'flex',
                    width: 164,
                    height: 180,
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    position: 'relative',
                    zIndex: 70,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundColor: '#ffd775',
                      borderTopLeftRadius: 113,
                      borderTopRightRadius: 113,
                      borderBottomRightRadius: 113,
                      borderBottomLeftRadius: 113,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 71,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 40,
                        height: 40,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 72,
                        marginTop: 20,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                      }}
                      source={require('./assets/images/a578e3eb-a3b7-4199-9a86-7618824c2282.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <Text
                    style={{
                      height: 18,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 17.64,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 73,
                    }}
                    numberOfLines={1}
                  >
                    Home
                  </Text>
                </View>
              </View>
              <LinearGradient
                colors={['#f9c75d', '#ffce8d']}
                useAngle={true}
                angle={178.57}
                style={{
                  display: 'flex',
                  paddingTop: 16,
                  paddingRight: 8,
                  paddingBottom: 16,
                  paddingLeft: 8,
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                  borderBottomRightRadius: 40,
                  borderBottomLeftRadius: 40,
                  position: 'relative',
                  zIndex: 78,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 63,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 17.64,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 79,
                  }}
                  numberOfLines={1}
                >
                  Continue
                </Text>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
