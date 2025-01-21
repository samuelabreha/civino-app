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
            width: 6916,
            height: 1652,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
              width: 886,
              height: 852,
              flexDirection: 'row',
              gap: 100,
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 400,
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
                zIndex: 1,
              }}
            >
              <View
                style={{
                  width: 393,
                  height: 44,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <View
                  style={{
                    width: 375,
                    height: 44,
                    position: 'absolute',
                    top: 0,
                    left: 9,
                    zIndex: 3,
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
                    zIndex: 11,
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
                    zIndex: 4,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 22,
                      height: 13,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      zIndex: 5,
                      transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                    }}
                    source={require('./assets/images/99f36bee-dde5-4f4a-a95d-f59c19f10d3a.png')}
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
                      zIndex: 6,
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
                      zIndex: 8,
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
                      zIndex: 7,
                      transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                    }}
                    source={require('./assets/images/346a23f1-2161-4cbf-b7e0-5af8228f9ce1.png')}
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
                    zIndex: 9,
                  }}
                  source={require('./assets/images/8f070fcc-a50d-41e2-bbe6-c67575dcab1a.png')}
                />
                <ImageBackground
                  style={{
                    width: 17.308,
                    height: 11.538,
                    position: 'absolute',
                    top: 15,
                    left: '50%',
                    zIndex: 10,
                    transform: [{ translateY: 0 }, { translateX: 96.5 }],
                  }}
                  source={require('./assets/images/44421153-60a5-42dc-879a-e61801fdde49.png')}
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
                  zIndex: 12,
                }}
              >
                <ImageBackground
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 13,
                  }}
                  source={require('./assets/images/88d5f4b8-cadb-487e-9714-aed35a5f97bb.png')}
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
                    zIndex: 14,
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
                    zIndex: 15,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 15.5,
                      height: 7.5,
                      position: 'relative',
                      zIndex: 16,
                      marginTop: 8.25,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 4.25,
                    }}
                    source={require('./assets/images/fbed440a-28f7-41fc-858b-807d6f723dec.png')}
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
                  zIndex: 17,
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
                    zIndex: 18,
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
                      zIndex: 19,
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
                        zIndex: 20,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 21,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/8339f1d6-34fc-4f2d-afab-4b5467a6bd4d.png')}
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
                        zIndex: 22,
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
                      zIndex: 27,
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
                        zIndex: 28,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 29,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/1c9cafde-56a6-48c2-8577-f7d80e33da4c.png')}
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
                        zIndex: 30,
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
                      zIndex: 35,
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
                        zIndex: 36,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 37,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/e7b2e719-49a3-421c-a9da-47e24dff7f1d.png')}
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
                        zIndex: 38,
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
                      zIndex: 23,
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
                        zIndex: 24,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 25,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/b6e90d96-1205-42f6-85cc-030d29c0a1f4.png')}
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
                        zIndex: 26,
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
                      zIndex: 31,
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
                        zIndex: 32,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 33,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/8031efef-b1b4-4afe-ba3f-737d13327ddc.png')}
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
                        zIndex: 34,
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
                    zIndex: 39,
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
                      zIndex: 40,
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
                zIndex: 41,
              }}
            >
              <View
                style={{
                  width: 393,
                  height: 44,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 42,
                }}
              >
                <View
                  style={{
                    width: 375,
                    height: 44,
                    position: 'absolute',
                    top: 0,
                    left: 9,
                    zIndex: 43,
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
                    zIndex: 51,
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
                    zIndex: 44,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 22,
                      height: 13,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      zIndex: 45,
                      transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                    }}
                    source={require('./assets/images/08162d61-057d-45c2-9fc5-5ce70e061ad5.png')}
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
                      zIndex: 46,
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
                      zIndex: 48,
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
                      zIndex: 47,
                      transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                    }}
                    source={require('./assets/images/82b82f13-203d-4ac3-9f58-d4517fdd74c1.png')}
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
                    zIndex: 49,
                  }}
                  source={require('./assets/images/230ee9fb-2ad4-47dc-9ca9-303d02408fd9.png')}
                />
                <ImageBackground
                  style={{
                    width: 17.308,
                    height: 11.538,
                    position: 'absolute',
                    top: 15,
                    left: '50%',
                    zIndex: 50,
                    transform: [{ translateY: 0 }, { translateX: 96.5 }],
                  }}
                  source={require('./assets/images/1889bef8-639f-4b43-8606-8841712e1508.png')}
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
                  zIndex: 52,
                }}
              >
                <ImageBackground
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 53,
                  }}
                  source={require('./assets/images/f8924285-1c99-435f-ad5e-329f035585f1.png')}
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
                    zIndex: 54,
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
                    zIndex: 55,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 15.5,
                      height: 7.5,
                      position: 'relative',
                      zIndex: 56,
                      marginTop: 8.25,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 4.25,
                    }}
                    source={require('./assets/images/b1bd482f-fec3-4978-a846-bdb7e2c0c836.png')}
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
                  zIndex: 57,
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
                    zIndex: 58,
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
                      zIndex: 59,
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
                        zIndex: 60,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 61,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/59ac4492-024b-4c87-b3a6-d602b8cb1fda.png')}
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
                        zIndex: 62,
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
                      zIndex: 67,
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
                        zIndex: 68,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 69,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/e08265a2-9e9a-4270-b0c5-cf648e039823.png')}
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
                        zIndex: 70,
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
                      zIndex: 75,
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
                        zIndex: 76,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 77,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/71828697-a9f8-4b5e-9256-bf02dccb50d8.png')}
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
                        zIndex: 78,
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
                      zIndex: 63,
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
                        zIndex: 64,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 65,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/d816f8fa-2d16-4daf-891a-7cdcda76a453.png')}
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
                        zIndex: 66,
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
                      zIndex: 71,
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
                        zIndex: 72,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 40,
                          height: 40,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 73,
                          marginTop: 20,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 20,
                        }}
                        source={require('./assets/images/7ad82e30-f6c5-469a-99fd-aa1bbe343f62.png')}
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
                        zIndex: 74,
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
                    zIndex: 79,
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
                      zIndex: 80,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
              </View>
            </LinearGradient>
          </View>
          <LinearGradient
            colors={['#fae8bd', '#ffffff']}
            useAngle={true}
            angle={180}
            style={{
              display: 'flex',
              width: 393,
              height: 852,
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 1686,
              overflow: 'hidden',
              zIndex: 81,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 82,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 83,
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
                  zIndex: 91,
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
                  zIndex: 84,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 85,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/b01bfeca-c393-4ee7-8322-d4c2acf397a5.png')}
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
                    zIndex: 86,
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
                    zIndex: 88,
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
                    zIndex: 87,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/73ffb222-3f80-4ff9-afe9-5e8b90a965e5.png')}
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
                  zIndex: 89,
                }}
                source={require('./assets/images/394d169e-9253-4913-bfa4-60ddb9a34859.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 90,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/c78dab02-fa8b-45c6-a9ea-ac68aecea8fa.png')}
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
                zIndex: 92,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 93,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 94,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 95,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 96,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 97,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 98,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 99,
                    }}
                    source={require('./assets/images/7e18bf98-64f3-4bbd-99b9-bbf8c4add386.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      height: 34,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 100,
                    }}
                    numberOfLines={1}
                  >
                    Listen to parents
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 101,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 102,
                    }}
                    source={require('./assets/images/be78bc14-0b06-4d26-bcfc-69b76ad6f86d.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 103,
                    }}
                    source={require('./assets/images/c2b7bdd6-5541-4848-a58e-cea128294dfd.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 104,
                    }}
                    source={require('./assets/images/eec86a6e-c8f0-4d62-923f-2d80a8314ddd.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 105,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 106,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 35,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 107,
                    }}
                    numberOfLines={1}
                  >
                    Back
                  </Text>
                </LinearGradient>
                <View
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    backgroundColor: '#e5e5e5',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 108,
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
                      zIndex: 109,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </View>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 2179,
              overflow: 'hidden',
              zIndex: 110,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 111,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 112,
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
                  zIndex: 120,
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
                  zIndex: 113,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 114,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/1310997b-3df1-4b50-9c98-48aba7184dd1.png')}
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
                    zIndex: 115,
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
                    zIndex: 117,
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
                    zIndex: 116,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/994281e9-91db-440b-8d55-fdb77701dc8c.png')}
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
                  zIndex: 118,
                }}
                source={require('./assets/images/e101b291-e077-4269-a823-ce27ee42b881.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 119,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/06c92119-ead7-4108-bdf8-356a5778bdd3.png')}
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
                zIndex: 121,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 122,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 123,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 124,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 125,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 126,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 127,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 128,
                    }}
                    source={require('./assets/images/bbcce0f6-bc26-435c-b24a-69369236963f.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      height: 34,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 129,
                    }}
                    numberOfLines={1}
                  >
                    Listen to parents
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 130,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 131,
                    }}
                    source={require('./assets/images/15ba55dc-f760-4d5f-bf6a-7e7b21875516.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 132,
                    }}
                    source={require('./assets/images/9b7b42cf-5226-4422-9b94-2bc3c02b5d95.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 133,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 135,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.689,
                      }}
                      source={require('./assets/images/c5347b91-ab69-43fc-95c4-ef1fe4cd7117.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#17cd7e',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 134,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 136,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 137,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 35,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 138,
                    }}
                    numberOfLines={1}
                  >
                    Back
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 139,
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
                      zIndex: 140,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 2672,
              overflow: 'hidden',
              zIndex: 141,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 142,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 143,
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
                  zIndex: 151,
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
                  zIndex: 144,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 145,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/3def997a-ba0c-4abe-ba1c-2cd42be066e7.png')}
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
                    zIndex: 146,
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
                    zIndex: 148,
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
                    zIndex: 147,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/75198cd6-ccf8-41d3-9b03-9f25c0da15f3.png')}
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
                  zIndex: 149,
                }}
                source={require('./assets/images/38434f41-6e2e-49bc-b8dc-98bb7b9ec260.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 150,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/0950e7d2-630d-4169-bf23-bf4081a381aa.png')}
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
                zIndex: 152,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 153,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 154,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 155,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 156,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 157,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 158,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 159,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 137.216,
                        height: 137.216,
                        position: 'relative',
                        zIndex: 160,
                        marginTop: 52.392,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 54.263,
                      }}
                      source={require('./assets/images/a4bfcb80-8d48-41c4-b447-0d67b6a6801e.png')}
                    />
                    <View
                      style={{
                        width: '110.33%',
                        height: '110.33%',
                        position: 'absolute',
                        top: '-9.09%',
                        left: '-5.99%',
                        overflow: 'hidden',
                        zIndex: 161,
                      }}
                    >
                      <View
                        style={{
                          width: '118.18%',
                          height: '115.86%',
                          position: 'absolute',
                          top: '-15.86%',
                          left: '-15.38%',
                          zIndex: 164,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '29.09%',
                            height: '50.18%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 176,
                          }}
                          source={require('./assets/images/a69798ef-bfa4-40ea-8f00-928bc8c346c9.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '5.05%',
                            height: '69.88%',
                            position: 'absolute',
                            top: '12.9%',
                            left: '20.28%',
                            zIndex: 169,
                          }}
                          source={require('./assets/images/c764a083-1c36-4d6f-9899-c27ecd9a8d4f.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '5.2%',
                            height: '68.56%',
                            position: 'absolute',
                            top: '13.49%',
                            left: '47.77%',
                            zIndex: 171,
                          }}
                          source={require('./assets/images/4568421d-3154-40a8-b747-45014b1ec6ab.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '5.05%',
                            height: '69.88%',
                            position: 'absolute',
                            top: '13.54%',
                            left: '94.95%',
                            zIndex: 168,
                          }}
                          source={require('./assets/images/199e06e8-8ca7-4e8e-9a8f-fbc201da719a.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '84.62%',
                            height: '86.31%',
                            position: 'absolute',
                            top: '13.69%',
                            left: '13.01%',
                            zIndex: 165,
                          }}
                          source={require('./assets/images/9452b425-c86b-44bd-9512-391fe037cb19.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '5.05%',
                            height: '68.16%',
                            position: 'absolute',
                            top: '13.69%',
                            left: '79.7%',
                            zIndex: 167,
                          }}
                          source={require('./assets/images/e702c56f-87ed-41a8-8df4-cad7a13a272a.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '5.2%',
                            height: '68.56%',
                            position: 'absolute',
                            top: '13.69%',
                            left: '65.2%',
                            zIndex: 170,
                          }}
                          source={require('./assets/images/c248cc2b-7ca2-4eb4-8b5e-6862c8a4edd1.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '68.24%',
                            height: '40.64%',
                            position: 'absolute',
                            top: '51.82%',
                            left: '21.11%',
                            zIndex: 177,
                          }}
                          source={require('./assets/images/3ebc614f-f4ee-4ee1-bebd-b798c0878522.png')}
                        />
                        <View
                          style={{
                            width: '12.68%',
                            height: '12.93%',
                            position: 'absolute',
                            top: '55.39%',
                            left: '48.83%',
                            overflow: 'hidden',
                            zIndex: 166,
                          }}
                        />
                        <ImageBackground
                          style={{
                            width: '84.62%',
                            height: '3.97%',
                            position: 'absolute',
                            top: '81.85%',
                            left: '13.01%',
                            zIndex: 173,
                          }}
                          source={require('./assets/images/56f7a560-9f88-4990-b30e-dd956428c029.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '84.62%',
                            height: '3.97%',
                            position: 'absolute',
                            top: '82.25%',
                            left: '13.01%',
                            zIndex: 174,
                          }}
                          source={require('./assets/images/3247d300-1d2a-44f7-bcc1-fae00a0079c0.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '84.62%',
                            height: '13.78%',
                            position: 'absolute',
                            top: '86.22%',
                            left: '13.01%',
                            zIndex: 172,
                          }}
                          source={require('./assets/images/22ebf63b-4a86-4542-a88a-40135bec702e.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '82.7%',
                            height: '8.48%',
                            position: 'absolute',
                            top: '89.51%',
                            left: '14.55%',
                            zIndex: 175,
                          }}
                          source={require('./assets/images/5602f057-31b3-496b-b413-640cbbad5de1.png')}
                        />
                      </View>
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 162,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 163,
                          }}
                          source={require('./assets/images/817441ea-3838-4e10-a832-6c11e7f091d3.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '37.07%',
                          height: '61.19%',
                          position: 'absolute',
                          top: '32.73%',
                          left: '9.15%',
                          zIndex: 179,
                        }}
                        source={require('./assets/images/8c5acf22-d957-4cb0-92bf-0e82d74d165a.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '38.53%',
                          height: '61.19%',
                          position: 'absolute',
                          top: '32.95%',
                          left: '44.7%',
                          zIndex: 178,
                        }}
                        source={require('./assets/images/109d3c00-22ae-4da0-82a8-01b0d71e0763.png')}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      height: 34,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 180,
                    }}
                    numberOfLines={1}
                  >
                    Stop fighting with their sibling
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 181,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 182,
                    }}
                    source={require('./assets/images/0c392812-3eac-450d-8ae7-db841760ca94.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 183,
                    }}
                    source={require('./assets/images/6b7de4d8-ad50-4d0c-806a-9e87a1a3cf8a.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 184,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 186,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.689,
                      }}
                      source={require('./assets/images/30298fbe-4c36-4fba-ba2b-79dea5223f68.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#17cd7e',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 185,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 187,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 188,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 189,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 190,
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
                      zIndex: 191,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 3165,
              overflow: 'hidden',
              zIndex: 192,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 193,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 194,
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
                  zIndex: 202,
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
                  zIndex: 195,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 196,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/28a99727-fc16-4b3a-8162-1e50726db06d.png')}
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
                    zIndex: 197,
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
                    zIndex: 199,
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
                    zIndex: 198,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/bbff54da-e120-44d1-b234-5f7dd42d2ebe.png')}
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
                  zIndex: 200,
                }}
                source={require('./assets/images/b55b9bc3-7c48-4a64-bf04-8b10fa920189.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 201,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/d55637b5-84cb-47f0-9ad5-6da88525c80c.png')}
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
                zIndex: 203,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 204,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 205,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 206,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 207,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 208,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 209,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 210,
                    }}
                  >
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: '-0.21%',
                        overflow: 'hidden',
                        zIndex: 212,
                      }}
                    >
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 213,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 214,
                          }}
                          source={require('./assets/images/befef25b-9a12-49c0-ad1b-63c01f9fdc6d.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 215,
                        }}
                        source={require('./assets/images/622089f3-49e9-4602-adb8-c87d9da469bc.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '52.79%',
                          height: '58.82%',
                          position: 'absolute',
                          top: '26.06%',
                          left: '14.65%',
                          zIndex: 217,
                        }}
                        source={require('./assets/images/af7fc66f-b359-43bf-a360-aa2882f8a651.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '87.56%',
                          height: '40.43%',
                          position: 'absolute',
                          top: '47.61%',
                          left: '10.7%',
                          zIndex: 216,
                        }}
                        source={require('./assets/images/0c2fecff-fcc5-45e1-95ca-7c63b7c040d4.png')}
                      />
                    </View>
                    <ImageBackground
                      style={{
                        width: '56.7%',
                        height: '56.7%',
                        position: 'absolute',
                        top: '21.65%',
                        left: '22.42%',
                        zIndex: 211,
                      }}
                      source={require('./assets/images/54a41763-f7a7-47fe-af3d-15b090fa3dc5.png')}
                    />
                  </View>
                  <Text
                    style={{
                      height: 34,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 218,
                    }}
                    numberOfLines={1}
                  >
                    Make their bed
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 219,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 220,
                    }}
                    source={require('./assets/images/0da611e6-127f-42e8-b342-62b9ee52c75e.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      backgroundColor: '#ffda82',
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 221,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 223,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.229,
                      }}
                      source={require('./assets/images/953c60da-2850-4b50-ab19-b8b7c29d7c63.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#ffb923',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 222,
                      }}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 224,
                    }}
                    source={require('./assets/images/964f12a7-2712-4dd4-afc5-604c9cdb3f58.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 225,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 226,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 227,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 228,
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
                      zIndex: 229,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 3658,
              overflow: 'hidden',
              zIndex: 230,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 231,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 232,
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
                  zIndex: 240,
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
                  zIndex: 233,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 234,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/b5bce8a6-b4e0-47cd-8c84-74b4f5abe073.png')}
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
                    zIndex: 235,
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
                    zIndex: 237,
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
                    zIndex: 236,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/79e0575a-c8e1-450a-9524-e2e17c6bbe62.png')}
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
                  zIndex: 238,
                }}
                source={require('./assets/images/c9da6f66-504e-4d4b-96f0-400a54e68ef8.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 239,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/6bc54895-e263-48bf-aef6-6e77ceea38e5.png')}
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
                zIndex: 241,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 242,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 243,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 244,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 245,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 246,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 247,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 248,
                    }}
                  >
                    <View
                      style={{
                        width: 137.216,
                        height: 137.216,
                        position: 'relative',
                        zIndex: 249,
                        marginTop: 52.392,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 54.263,
                      }}
                    >
                      <View
                        style={{
                          width: 289,
                          height: 289,
                          position: 'absolute',
                          top: -99.392,
                          left: -67.763,
                          zIndex: 250,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 137.216,
                            height: 137.216,
                            position: 'relative',
                            zIndex: 251,
                            marginTop: 99.392,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 67.763,
                          }}
                          source={require('./assets/images/4d3e9b2a-17f0-4841-be97-a3fa4cb784ba.png')}
                        />
                        <View
                          style={{
                            width: 289,
                            height: 289,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            overflow: 'hidden',
                            zIndex: 252,
                          }}
                        >
                          <View
                            style={{
                              width: '99.88%',
                              height: '99.88%',
                              position: 'absolute',
                              top: '0.11%',
                              left: '0.12%',
                              zIndex: 253,
                            }}
                          >
                            <ImageBackground
                              style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 254,
                              }}
                              source={require('./assets/images/597765f9-4c4a-4905-98f1-fec7d06cf9e0.png')}
                            />
                          </View>
                          <ImageBackground
                            style={{
                              width: '118.63%',
                              height: '101.37%',
                              position: 'absolute',
                              top: '0.11%',
                              left: '-0.07%',
                              zIndex: 255,
                            }}
                            source={require('./assets/images/770a5860-f0b7-4e7c-ae37-c5ecd911fb62.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '69.87%',
                              height: '78.64%',
                              position: 'absolute',
                              top: '6.28%',
                              left: '15.18%',
                              zIndex: 256,
                            }}
                            source={require('./assets/images/428bb7bd-d0d9-4a7c-a3d8-5bc1b739bb00.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '39.31%',
                              height: '72.41%',
                              position: 'absolute',
                              top: '18.65%',
                              left: '17.33%',
                              zIndex: 257,
                            }}
                            source={require('./assets/images/99b17111-98e5-4863-88df-20c96d381f06.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '31.4%',
                              height: '50.39%',
                              position: 'absolute',
                              top: '40.54%',
                              left: '44.05%',
                              zIndex: 258,
                            }}
                            source={require('./assets/images/8ff8f01f-4d20-467f-ae58-1d67dd4b51b4.png')}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      height: 34,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 259,
                    }}
                    numberOfLines={1}
                  >
                    Put away their pants
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 260,
                  }}
                >
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 261,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 263,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.771,
                      }}
                      source={require('./assets/images/e999144d-ef5e-4522-b86c-86fdfb289beb.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#ff4545',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 262,
                      }}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 264,
                    }}
                    source={require('./assets/images/21e2945d-d117-4641-878a-bf14dd9af710.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 265,
                    }}
                    source={require('./assets/images/21de4b3b-7f06-40d1-8c7c-8aecb8793dde.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 266,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 267,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 268,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 269,
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
                      zIndex: 270,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 4151,
              overflow: 'hidden',
              zIndex: 271,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 272,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 273,
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
                  zIndex: 281,
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
                  zIndex: 274,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 275,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/a9044f87-c1d4-4b6b-9cf9-20d4114bbebc.png')}
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
                    zIndex: 276,
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
                    zIndex: 278,
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
                    zIndex: 277,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/d5491d6b-f630-46d0-bc80-3eae09e51ccf.png')}
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
                  zIndex: 279,
                }}
                source={require('./assets/images/d8583492-8d83-439e-abeb-cc8f1215628c.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 280,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/412eb7e3-e6dd-4cdd-af21-a8d6bd008fe6.png')}
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
                zIndex: 282,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 283,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 284,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 285,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 286,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 287,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 288,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 289,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 137.216,
                        height: 137.216,
                        position: 'relative',
                        zIndex: 290,
                        marginTop: 52.392,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 54.263,
                      }}
                      source={require('./assets/images/e9fa5526-65c9-4498-895e-f0c855c54194.png')}
                    />
                    <View
                      style={{
                        width: '122.31%',
                        height: '122.31%',
                        position: 'absolute',
                        top: '-11.16%',
                        left: '-10.54%',
                        overflow: 'hidden',
                        zIndex: 291,
                      }}
                    >
                      <View
                        style={{
                          width: '100.57%',
                          height: '105.51%',
                          position: 'absolute',
                          top: '-5.34%',
                          left: 0,
                          zIndex: 294,
                        }}
                      >
                        <View
                          style={{
                            width: 297.699,
                            height: 218.794,
                            position: 'relative',
                            zIndex: 325,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '11.17%',
                              height: '46.7%',
                              position: 'absolute',
                              top: 0,
                              left: '36.71%',
                              zIndex: 324,
                            }}
                            source={require('./assets/images/256b4638-cf56-4841-9230-0900c56731d8.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '10.7%',
                              height: '46.7%',
                              position: 'absolute',
                              top: 0,
                              left: '37.27%',
                              zIndex: 325,
                            }}
                            source={require('./assets/images/306932d3-ab4d-4761-a4ff-87dda46c647f.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '10.99%',
                              height: '46.7%',
                              position: 'absolute',
                              top: 0,
                              left: '49.43%',
                              zIndex: 322,
                            }}
                            source={require('./assets/images/6b74beff-222d-4583-836f-8452f7b65fad.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '10.37%',
                              height: '46.7%',
                              position: 'absolute',
                              top: 0,
                              left: '50.1%',
                              zIndex: 323,
                            }}
                            source={require('./assets/images/8bb30375-cf8e-43c5-b6eb-e7559490fd65.png')}
                          />
                          <View
                            style={{
                              width: '99.6%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: 0,
                              zIndex: 295,
                            }}
                          >
                            <ImageBackground
                              style={{
                                width: '22.18%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 296,
                              }}
                              source={require('./assets/images/2eb06034-1d94-4c75-99df-811ba2dd35f2.png')}
                            />
                            <ImageBackground
                              style={{
                                width: '30.45%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: '69.55%',
                                zIndex: 297,
                              }}
                              source={require('./assets/images/cbcf81ac-6927-40b8-8239-de3b3b25d92a.png')}
                            />
                          </View>
                          <ImageBackground
                            style={{
                              width: '3.86%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: '22.09%',
                              zIndex: 313,
                            }}
                            source={require('./assets/images/6e4bdd4d-e81b-4d84-8999-54550a42c14e.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '39.6%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: '25.96%',
                              zIndex: 309,
                            }}
                            source={require('./assets/images/10ddcac3-3102-425a-91a0-780773caa343.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '27.11%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: '35.48%',
                              zIndex: 314,
                            }}
                            source={require('./assets/images/9614c7ca-d6ee-4c65-9d8f-adfa56ac0d9b.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '3.86%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: '62.6%',
                              zIndex: 311,
                            }}
                            source={require('./assets/images/e245d26a-b4cc-49f1-afe4-c7317b986a29.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '3.86%',
                              height: '92.78%',
                              position: 'absolute',
                              top: '7.22%',
                              left: '65.41%',
                              zIndex: 312,
                            }}
                            source={require('./assets/images/3cfa1a9f-99ed-49c2-b2a3-0cdb46a5bcd9.png')}
                          />
                          <View
                            style={{
                              width: '99.93%',
                              height: '78.67%',
                              position: 'absolute',
                              top: '10.76%',
                              left: '0.07%',
                              zIndex: 298,
                            }}
                          >
                            <ImageBackground
                              style={{
                                width: 295.59,
                                position: 'relative',
                                zIndex: 300,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0.13,
                              }}
                              source={require('./assets/images/ee9d0e81-ccb2-434b-bb6e-973b6f7d6e7c.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 299,
                                marginTop: 21.206,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/97072361-e106-49a9-8a81-0924615f46a3.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 301,
                                marginTop: 22.292,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/0500838c-68ed-457d-bebc-a1c8fa11a265.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 302,
                                marginTop: 24.412,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/7f67d4e7-23ac-4b4c-84ca-adce1eae67c9.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 303,
                                marginTop: 24.412,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/f3f8a33f-e857-45d7-b86e-8743f01330f2.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 304,
                                marginTop: 23.605,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/27454de0-58bf-452c-892d-483c00fc6d47.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 305,
                                marginTop: 23.706,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/45e338a9-7c73-4c77-bb2e-e39bffe92a52.png')}
                            />
                            <ImageBackground
                              style={{
                                width: 242,
                                height: 1,
                                position: 'relative',
                                zIndex: 306,
                                marginTop: 25.996,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25.295,
                              }}
                              source={require('./assets/images/7484e435-7ab5-4789-a78e-796c4442cdec.png')}
                            />
                          </View>
                          <ImageBackground
                            style={{
                              width: '11.17%',
                              height: '46.7%',
                              position: 'absolute',
                              top: '49.17%',
                              left: '37.04%',
                              zIndex: 320,
                            }}
                            source={require('./assets/images/8139c3d6-19e2-4317-abdd-18fe0b9fdae0.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '10.57%',
                              height: '46.7%',
                              position: 'absolute',
                              top: '49.17%',
                              left: '37.58%',
                              zIndex: 321,
                            }}
                            source={require('./assets/images/3444614c-6c69-4c16-8daf-3d76a2e34a2d.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '10.62%',
                              height: '46.7%',
                              position: 'absolute',
                              top: '49.17%',
                              left: '49.84%',
                              zIndex: 318,
                            }}
                            source={require('./assets/images/ac6216a9-5385-46b4-8b57-8775d29acc99.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '9.99%',
                              height: '46.7%',
                              position: 'absolute',
                              top: '49.17%',
                              left: '50.47%',
                              zIndex: 319,
                            }}
                            source={require('./assets/images/bdacdc2a-4d3f-4729-a44d-fb3a1431f957.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '39.46%',
                              height: '10.57%',
                              position: 'absolute',
                              top: '89.43%',
                              left: '25.95%',
                              zIndex: 310,
                            }}
                            source={require('./assets/images/0e16434d-c420-4144-8ff8-6d8849515e6b.png')}
                          />
                        </View>
                        <View
                          style={{
                            width: 296,
                            height: 66.704,
                            position: 'relative',
                            zIndex: 317,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 307,
                            }}
                            source={require('./assets/images/b8073222-d10c-418a-ae31-eb1043400e5a.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '48.34%',
                              height: '16.27%',
                              position: 'absolute',
                              top: '11%',
                              left: '26.1%',
                              zIndex: 316,
                            }}
                            source={require('./assets/images/af220514-ec72-4be4-92ec-83fc1359734d.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '48.34%',
                              height: '20.38%',
                              position: 'absolute',
                              top: '11%',
                              left: '26.1%',
                              zIndex: 317,
                            }}
                            source={require('./assets/images/a39e5bf4-03ea-4981-aa18-9eeffb0a94e4.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '48.34%',
                              height: '16.27%',
                              position: 'absolute',
                              top: '15.11%',
                              left: '26.1%',
                              zIndex: 315,
                            }}
                            source={require('./assets/images/a1126d5a-75c7-4d23-93b4-4b318d138f13.png')}
                          />
                        </View>
                        <ImageBackground
                          style={{
                            width: 296.658,
                            height: 26.65,
                            position: 'relative',
                            zIndex: 308,
                            marginTop: 0.16,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={require('./assets/images/9c9a31d7-5e9f-4cc7-877f-61b1fce9eb59.png')}
                        />
                      </View>
                      <View
                        style={{
                          width: '100.17%',
                          height: '100.17%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 292,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 293,
                          }}
                          source={require('./assets/images/82751cff-4ab6-4fab-b974-fe356492ba09.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '112.08%',
                          height: '57.6%',
                          position: 'absolute',
                          top: '12.81%',
                          left: '-51.21%',
                          zIndex: 326,
                        }}
                        source={require('./assets/images/1005b6d5-4cac-49e7-a129-7f0caa0c1d15.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '67.52%',
                          height: '58.62%',
                          position: 'absolute',
                          top: '15.71%',
                          left: '48.22%',
                          zIndex: 327,
                        }}
                        source={require('./assets/images/1832e1ae-dba8-46bd-b6d0-8bcde2374046.png')}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 353,
                      height: 68,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 328,
                    }}
                  >
                    Put shoes away at the entrance
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 329,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 330,
                    }}
                    source={require('./assets/images/f3cbfab3-e55a-478e-9c36-679cb0635fe2.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 331,
                    }}
                    source={require('./assets/images/f30ce471-195b-4bdf-a4ae-d546a678d91f.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 332,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 334,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.689,
                      }}
                      source={require('./assets/images/04096d77-ef5d-4dc0-96aa-aa33aadc9dc6.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#17cd7e',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 333,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 335,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 336,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 337,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 338,
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
                      zIndex: 339,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 4644,
              overflow: 'hidden',
              zIndex: 340,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 341,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 342,
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
                  zIndex: 350,
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
                  zIndex: 343,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 344,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/f6a36467-27fa-4c63-b17d-c01df1e2275a.png')}
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
                    zIndex: 345,
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
                    zIndex: 347,
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
                    zIndex: 346,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/07092026-598a-4b0b-9dba-a377444502fa.png')}
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
                  zIndex: 348,
                }}
                source={require('./assets/images/f8823449-c0b0-4edd-a66c-6ca388e73bfc.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 349,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/a6d0652a-25be-428b-8bdb-3d1fd0e76a91.png')}
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
                zIndex: 351,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 352,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 353,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 354,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 355,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 356,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 357,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 358,
                    }}
                    source={require('./assets/images/442b2542-26f7-41c6-b0d6-65cc763a12c5.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 353,
                      height: 68,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 359,
                    }}
                  >
                    Throw leftover food in the trash
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 360,
                  }}
                >
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 361,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 363,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.771,
                      }}
                      source={require('./assets/images/0798712f-3032-4c48-a540-59cf07a2ae01.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#ff4545',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 362,
                      }}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 364,
                    }}
                    source={require('./assets/images/b5052d4f-efa6-4968-b63f-c063f0fe71c9.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 365,
                    }}
                    source={require('./assets/images/4a8852e3-07a2-4fb5-ba00-09a1ac97ce65.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 366,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 367,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 368,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 369,
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
                      zIndex: 370,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 5137,
              overflow: 'hidden',
              zIndex: 371,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 372,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 373,
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
                  zIndex: 381,
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
                  zIndex: 374,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 375,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/88f92809-b7fd-420f-88a6-158a1dbf9d25.png')}
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
                    zIndex: 376,
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
                    zIndex: 378,
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
                    zIndex: 377,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/05bf3267-2ea9-4013-b045-a18572dc6f85.png')}
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
                  zIndex: 379,
                }}
                source={require('./assets/images/68bd144a-344b-46ef-8651-108029f6885b.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 380,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/343aba6b-2123-49be-a2e7-970e8d92cfbe.png')}
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
                zIndex: 382,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 383,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 384,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 385,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 386,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 387,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 388,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 389,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 137.216,
                        height: 137.216,
                        position: 'relative',
                        zIndex: 390,
                        marginTop: 52.392,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 54.263,
                      }}
                      source={require('./assets/images/acca061a-b6bf-40ee-82cf-215908fc1d86.png')}
                    />
                    <View
                      style={{
                        width: '111.57%',
                        height: '111.57%',
                        position: 'absolute',
                        top: '-7.02%',
                        left: '-7.64%',
                        overflow: 'hidden',
                        zIndex: 391,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 255.099,
                          height: 162.207,
                          position: 'relative',
                          zIndex: 395,
                          marginTop: 55.259,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 13.721,
                        }}
                        source={require('./assets/images/d3510d69-be1c-4124-b690-4e6582ae2ac0.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '100.25%',
                          height: '100.1%',
                          position: 'absolute',
                          top: '0%',
                          left: '-0.22%',
                          zIndex: 394,
                        }}
                        source={require('./assets/images/1d2efc6f-3518-4c07-a7be-5cabd47b4d31.png')}
                      />
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 392,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 393,
                          }}
                          source={require('./assets/images/776871a8-ebe6-464d-9c79-79a03b1bbb60.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 353,
                      height: 68,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 396,
                    }}
                  >
                    Share drinks and food with the whole family
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 397,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 398,
                    }}
                    source={require('./assets/images/4e7a7d6c-cbb5-4cba-8732-03a0bb206672.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 399,
                    }}
                    source={require('./assets/images/d0297d16-e59d-41b1-ac7e-868a67b99a44.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 400,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 402,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.689,
                      }}
                      source={require('./assets/images/5ed35cd1-f991-4cd9-8ae1-62d1c898a0fa.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#17cd7e',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 401,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 403,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 404,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 405,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 406,
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
                      zIndex: 407,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 5630,
              overflow: 'hidden',
              zIndex: 408,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 409,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 410,
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
                  zIndex: 418,
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
                  zIndex: 411,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 412,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/d85c34b8-f604-41d0-bf80-f8113a181639.png')}
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
                    zIndex: 413,
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
                    zIndex: 415,
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
                    zIndex: 414,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/a3eddfe4-ffd9-4451-a0f7-d430406f0d57.png')}
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
                  zIndex: 416,
                }}
                source={require('./assets/images/ae7576c1-286d-485c-ab39-c2bdf61425c0.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 417,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/d3c10e79-06b7-4105-bb36-36be08a71b36.png')}
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
                zIndex: 419,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 420,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 421,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 422,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 423,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 424,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 425,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 426,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 137.216,
                        height: 137.216,
                        position: 'relative',
                        zIndex: 427,
                        marginTop: 52.392,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 54.263,
                      }}
                      source={require('./assets/images/852c2f17-990e-40ec-96c8-cdba1e73f42c.png')}
                    />
                    <View
                      style={{
                        width: '119.83%',
                        height: '119.83%',
                        position: 'absolute',
                        top: '-13.64%',
                        left: '-11.78%',
                        overflow: 'hidden',
                        zIndex: 428,
                      }}
                    >
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 429,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 430,
                          }}
                          source={require('./assets/images/a5ebd152-54ba-4189-b067-4db9b6f69ecc.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 431,
                        }}
                        source={require('./assets/images/838ea12c-8d3b-4177-8c4b-dcf872fb3fca.png')}
                      />
                      <View
                        style={{
                          width: '87.23%',
                          height: '65.64%',
                          position: 'absolute',
                          top: '25.62%',
                          left: '8.76%',
                          zIndex: 432,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '82.77%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 485,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '29.23%',
                              height: '85.91%',
                              position: 'absolute',
                              top: 0,
                              left: '0.56%',
                              zIndex: 451,
                            }}
                            source={require('./assets/images/80df036f-c14f-4f28-91c2-899eb049f6cf.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '14.62%',
                              height: '34.74%',
                              position: 'absolute',
                              top: '10.02%',
                              left: '72.16%',
                              zIndex: 468,
                            }}
                            source={require('./assets/images/a062dcf7-6d9c-4e34-84fb-7b71e79cde87.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '14.62%',
                              height: '34.74%',
                              position: 'absolute',
                              top: '10.02%',
                              left: '72.4%',
                              zIndex: 467,
                            }}
                            source={require('./assets/images/1c5b84d6-1a7e-4dd1-b208-90ca0420d8f5.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '3.79%',
                              height: '7.89%',
                              position: 'absolute',
                              top: '12.1%',
                              left: '74.86%',
                              zIndex: 481,
                            }}
                            source={require('./assets/images/2b018c8e-54da-4e9c-9cd5-4bb68135ff30.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '4.37%',
                              height: '10.72%',
                              position: 'absolute',
                              top: '15.28%',
                              left: '80.83%',
                              zIndex: 478,
                            }}
                            source={require('./assets/images/b9bb0197-4eda-4960-87c0-679ff163377c.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '5.85%',
                              height: '12.5%',
                              position: 'absolute',
                              top: '21.14%',
                              left: '77.23%',
                              zIndex: 479,
                            }}
                            source={require('./assets/images/54cf7fff-3c9d-4092-a929-2a16ae97cac2.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '14.62%',
                              height: '34.74%',
                              position: 'absolute',
                              top: '21.76%',
                              left: '61.9%',
                              zIndex: 470,
                            }}
                            source={require('./assets/images/a9e173ff-f123-4ad2-88a5-421229f43022.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '14.62%',
                              height: '34.74%',
                              position: 'absolute',
                              top: '21.76%',
                              left: '62.12%',
                              zIndex: 469,
                            }}
                            source={require('./assets/images/05580bf9-7f43-4e64-937a-e30c86ff4fc9.png')}
                          />
                          <Text
                            style={{
                              display: 'flex',
                              height: '4.44%',
                              justifyContent: 'flex-start',
                              alignItems: 'flex-start',
                              fontFamily: 'Plus Jakarta Sans',
                              fontSize: 5,
                              fontWeight: '400',
                              lineHeight: 6.3,
                              color: '#f1f6db',
                              position: 'absolute',
                              top: '28.37%',
                              left: '64.67%',
                              textAlign: 'left',
                              zIndex: 485,
                            }}
                            numberOfLines={1}
                          >
                            CLEAN UP
                          </Text>
                          <ImageBackground
                            style={{
                              width: '5.44%',
                              height: '11.4%',
                              position: 'absolute',
                              top: '29.94%',
                              left: '80.15%',
                              zIndex: 480,
                            }}
                            source={require('./assets/images/3ac5f5aa-3171-4b78-9f28-a9f2a6a5703c.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '11.44%',
                              height: '18.37%',
                              position: 'absolute',
                              top: '32.74%',
                              left: '63.49%',
                              zIndex: 474,
                            }}
                            source={require('./assets/images/abc41fea-f5ba-4943-83d6-5342f5bbeeeb.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '2.32%',
                              height: '3.73%',
                              position: 'absolute',
                              top: '36.85%',
                              left: '67.38%',
                              zIndex: 475,
                            }}
                            source={require('./assets/images/ffdd0c9f-e7ea-487b-b99f-2220492175ef.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '2.91%',
                              height: '3.79%',
                              position: 'absolute',
                              top: '40.4%',
                              left: '71.59%',
                              zIndex: 483,
                            }}
                            source={require('./assets/images/7741efec-b39e-494c-9d3f-fe4e512a7741.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '0.31%',
                              height: '3.79%',
                              position: 'absolute',
                              top: '40.4%',
                              left: '74.29%',
                              zIndex: 484,
                            }}
                            source={require('./assets/images/70673ff5-a5e0-4aaf-ac92-431f6a259597.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '6.32%',
                              height: '8.05%',
                              position: 'absolute',
                              top: '40.74%',
                              left: '64.22%',
                              zIndex: 476,
                            }}
                            source={require('./assets/images/477dbd6d-deee-4ef0-9681-2d69c2951df3.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '0.72%',
                              height: '1.16%',
                              position: 'absolute',
                              top: '42.82%',
                              left: '70.65%',
                              zIndex: 482,
                            }}
                            source={require('./assets/images/6b66c98f-af31-42f6-a695-bdefc8b67198.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '5.39%',
                              height: '5.68%',
                              position: 'absolute',
                              top: '43.61%',
                              left: '69.21%',
                              zIndex: 477,
                            }}
                            source={require('./assets/images/430f39bf-f14b-43bc-a015-282c02ebc034.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '11.52%',
                              height: '14.88%',
                              position: 'absolute',
                              top: '59.06%',
                              left: '86.09%',
                              zIndex: 465,
                            }}
                            source={require('./assets/images/52aa2fe4-7ded-4541-adc5-436b6c8addaa.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '12%',
                              height: '14.66%',
                              position: 'absolute',
                              top: '59.06%',
                              left: '86.57%',
                              zIndex: 464,
                            }}
                            source={require('./assets/images/26d64e15-75d2-46be-9fcc-c95e49051faa.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '11.52%',
                              height: '14.36%',
                              position: 'absolute',
                              top: '59.06%',
                              left: '87.25%',
                              zIndex: 463,
                            }}
                            source={require('./assets/images/1df35690-6a27-46e3-afc8-358f86510e7c.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '0.71%',
                              height: '10.04%',
                              position: 'absolute',
                              top: '59.06%',
                              left: '96.9%',
                              zIndex: 466,
                            }}
                            source={require('./assets/images/44a3851a-d561-4d7a-bf02-29902e7cda06.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.29%',
                              height: '27.34%',
                              position: 'absolute',
                              top: '62.31%',
                              left: '14.17%',
                              zIndex: 453,
                            }}
                            source={require('./assets/images/c204ec54-1c28-4fe2-a995-1d6ddf8896ca.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '28.16%',
                              height: '29.68%',
                              position: 'absolute',
                              top: '66.33%',
                              left: '71.84%',
                              zIndex: 433,
                            }}
                            source={require('./assets/images/3b968d60-0380-490e-bd04-00bab11a2881.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '12.24%',
                              height: '6.86%',
                              position: 'absolute',
                              top: '66.33%',
                              left: '87.76%',
                              zIndex: 434,
                            }}
                            source={require('./assets/images/feb3f098-f37d-49b0-a8dc-88368cb9c506.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.22%',
                              height: '20.94%',
                              position: 'absolute',
                              top: '66.85%',
                              left: 0,
                              zIndex: 452,
                            }}
                            source={require('./assets/images/cae51fab-c5c4-4d6b-9043-7cdf1c5d316a.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '14.64%',
                              height: '23.5%',
                              position: 'absolute',
                              top: '76.5%',
                              left: '84.45%',
                              zIndex: 448,
                            }}
                            source={require('./assets/images/5d9b7cc3-f5cd-4930-8abd-580f4b407f44.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '12.33%',
                              height: '6.06%',
                              position: 'absolute',
                              top: '88.25%',
                              left: '67.83%',
                              zIndex: 462,
                            }}
                            source={require('./assets/images/e9c84552-d0c0-4c42-9681-c8aa7e69aa14.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.33%',
                              height: '2.49%',
                              position: 'absolute',
                              top: '91.96%',
                              left: '67.17%',
                              zIndex: 461,
                            }}
                            source={require('./assets/images/d5d7fe0f-5bb6-49d7-88df-b530e0da46c7.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.23%',
                              height: '2.99%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '67.27%',
                              zIndex: 454,
                            }}
                            source={require('./assets/images/b3587883-70da-4858-9ec8-481504c20d79.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.23%',
                              height: '1.1%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '67.27%',
                              zIndex: 456,
                            }}
                            source={require('./assets/images/abc5a810-195f-4acc-b62b-0b428338a0ed.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '1.16%',
                              height: '2.99%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '67.98%',
                              zIndex: 457,
                            }}
                            source={require('./assets/images/bb040e09-6e0f-4935-8c58-213333000d72.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '0.2%',
                              height: '2.99%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '69.98%',
                              zIndex: 458,
                            }}
                            source={require('./assets/images/f51e530f-e49d-4845-a9f4-4b2709cf904b.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '6.62%',
                              height: '2.99%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '71.01%',
                              zIndex: 459,
                            }}
                            source={require('./assets/images/2bcd7b72-8263-448b-8489-b93e25c1f3ec.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '0.82%',
                              height: '2.99%',
                              position: 'absolute',
                              top: '94.44%',
                              left: '78.46%',
                              zIndex: 460,
                            }}
                            source={require('./assets/images/b3d959d9-9b89-4eb7-b3c5-cebdea9f0c3d.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '13.23%',
                              height: '0.64%',
                              position: 'absolute',
                              top: '96.79%',
                              left: '67.27%',
                              zIndex: 455,
                            }}
                            source={require('./assets/images/30b1c5a7-7add-4b7f-87e0-e18359141375.png')}
                          />
                        </View>
                        <View
                          style={{
                            width: '65.44%',
                            height: '22.75%',
                            position: 'absolute',
                            top: '77.25%',
                            left: '5.13%',
                            zIndex: 473,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '29.39%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 447,
                            }}
                            source={require('./assets/images/db70e706-9a91-4a6f-b930-e32f212cae29.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '12.22%',
                              height: '20.51%',
                              position: 'absolute',
                              top: '7.62%',
                              left: '9.38%',
                              zIndex: 473,
                            }}
                            source={require('./assets/images/fd99409d-89ad-4065-8c79-b7d57f5db16c.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '17.79%',
                              height: '19.79%',
                              position: 'absolute',
                              top: '28.02%',
                              left: '31.48%',
                              zIndex: 450,
                            }}
                            source={require('./assets/images/f6bfe065-3ac2-4a49-851f-ecc569c69db7.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '19.77%',
                              height: '33.14%',
                              position: 'absolute',
                              top: '30.56%',
                              left: '30.5%',
                              zIndex: 449,
                            }}
                            source={require('./assets/images/6c5e074a-4333-4ef9-8a5b-797fff86f6df.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '7.97%',
                              height: '45.9%',
                              position: 'absolute',
                              top: '37.54%',
                              left: '19.11%',
                              zIndex: 471,
                            }}
                            source={require('./assets/images/fd3eeed8-3b49-4911-9890-a6153c8864b6.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '6.44%',
                              height: '43.01%',
                              position: 'absolute',
                              top: '38.99%',
                              left: '4.03%',
                              zIndex: 472,
                            }}
                            source={require('./assets/images/62a64bd4-1b0d-42da-b4eb-f365c9a6ecdf.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '16.64%',
                              height: '25.72%',
                              position: 'absolute',
                              top: '50.01%',
                              left: '79.57%',
                              zIndex: 435,
                            }}
                            source={require('./assets/images/5eeab3e3-c96b-4de1-a3bd-d7e2e3df32d1.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '3.9%',
                              height: '17.29%',
                              position: 'absolute',
                              top: '51.07%',
                              left: '96.1%',
                              zIndex: 443,
                            }}
                            source={require('./assets/images/3f6e5f80-f19f-43ef-a341-6fb65a8b7380.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '9.35%',
                              height: '17.34%',
                              position: 'absolute',
                              top: '51.36%',
                              left: '86.2%',
                              zIndex: 442,
                            }}
                            source={require('./assets/images/9292e3bf-284a-46aa-9c68-97810c2ae349.png')}
                          />
                        </View>
                        <ImageBackground
                          style={{
                            width: '8.43%',
                            height: '0.92%',
                            position: 'absolute',
                            top: '88.09%',
                            left: '62.85%',
                            zIndex: 441,
                          }}
                          source={require('./assets/images/2968ba99-a591-4720-a42f-6cc1afbfe7dc.png')}
                        />
                        <View
                          style={{
                            width: '5.55%',
                            height: '5.09%',
                            position: 'absolute',
                            top: '88.14%',
                            left: '67.72%',
                            zIndex: 444,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 7.571,
                              height: 6.713,
                              position: 'relative',
                              zIndex: 444,
                              marginTop: 0.53,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 5.173,
                            }}
                            source={require('./assets/images/85e0e3fa-fc2c-42f6-a9b7-a3383c5ad0c8.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 436,
                            }}
                            source={require('./assets/images/c27e9e78-4501-46ce-9845-81a7e2b589bb.png')}
                          />
                        </View>
                        <View
                          style={{
                            width: '9.14%',
                            height: '5.45%',
                            position: 'absolute',
                            top: '91.66%',
                            left: '64.19%',
                            zIndex: 446,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 6.018,
                              height: 6.437,
                              position: 'relative',
                              zIndex: 446,
                              marginTop: 1.906,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 16.37,
                            }}
                            source={require('./assets/images/0bc1e9f2-b330-459b-b2e9-f52157d11326.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 440,
                            }}
                            source={require('./assets/images/ac79ce4a-dffa-471f-aec4-e3f5a0c3607a.png')}
                          />
                        </View>
                        <ImageBackground
                          style={{
                            width: '7.18%',
                            height: '3.18%',
                            position: 'absolute',
                            top: '93.92%',
                            left: '57.08%',
                            zIndex: 439,
                          }}
                          source={require('./assets/images/46f2ebd0-0b42-41a2-9cc4-5e386ff5aebf.png')}
                        />
                        <ImageBackground
                          style={{
                            width: '2.38%',
                            height: '3.38%',
                            position: 'absolute',
                            top: '94.33%',
                            left: '65.75%',
                            zIndex: 445,
                          }}
                          source={require('./assets/images/6cf8fa7e-d849-4c47-850c-0c33963c0ce0.png')}
                        />
                        <View
                          style={{
                            width: '2.28%',
                            height: '3.38%',
                            position: 'absolute',
                            top: '94.41%',
                            left: '59.45%',
                            zIndex: 438,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '69.18%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: '30.82%',
                              zIndex: 438,
                            }}
                            source={require('./assets/images/e95e4cbc-a8dc-4008-a98e-0d9c6e20e701.png')}
                          />
                          <ImageBackground
                            style={{
                              width: '62.24%',
                              height: '40.84%',
                              position: 'absolute',
                              top: '57.5%',
                              left: 0,
                              zIndex: 437,
                            }}
                            source={require('./assets/images/04f40fc0-cb54-4a0f-a8bf-57ee931f48b4.png')}
                          />
                        </View>
                      </View>
                      <ImageBackground
                        style={{
                          width: '31.39%',
                          height: '34.24%',
                          position: 'absolute',
                          top: '44.23%',
                          left: '32.8%',
                          zIndex: 486,
                        }}
                        source={require('./assets/images/443b1515-6a0c-46fa-91f0-7ffd96c10982.png')}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 353,
                      height: 68,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 487,
                    }}
                  >
                    Not putting away toys and books
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 488,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 489,
                    }}
                    source={require('./assets/images/579b28d5-0005-4867-8713-b75b8b1603d7.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      backgroundColor: '#ffda82',
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 490,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 492,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.229,
                      }}
                      source={require('./assets/images/467e6735-952b-4e14-9215-36dc26717032.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#ffb923',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 491,
                      }}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 493,
                    }}
                    source={require('./assets/images/f58f3fa6-8fe7-4a31-9c34-bb6aac85b310.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 494,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 495,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 496,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 497,
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
                      zIndex: 498,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
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
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 400,
              left: 6123,
              overflow: 'hidden',
              zIndex: 499,
            }}
          >
            <View
              style={{
                width: 393,
                height: 44,
                flexShrink: 0,
                position: 'relative',
                zIndex: 500,
              }}
            >
              <View
                style={{
                  width: 375,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 9,
                  zIndex: 501,
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
                  zIndex: 509,
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
                  zIndex: 502,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 13,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 503,
                    transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                  }}
                  source={require('./assets/images/e5d0356f-66d8-4305-9dba-38d4a5f9de2f.png')}
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
                    zIndex: 504,
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
                    zIndex: 506,
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
                    zIndex: 505,
                    transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                  }}
                  source={require('./assets/images/7d337b27-257b-4140-8aaf-b635e36375e7.png')}
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
                  zIndex: 507,
                }}
                source={require('./assets/images/1007c23a-42eb-4348-b3f6-c7fad521a2ac.png')}
              />
              <ImageBackground
                style={{
                  width: 17.308,
                  height: 11.538,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 508,
                  transform: [{ translateY: 0 }, { translateX: 96.5 }],
                }}
                source={require('./assets/images/d8e0194e-4298-4410-8609-151e80a07c77.png')}
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
                zIndex: 510,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 120,
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  color: '#272727',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 511,
                }}
                numberOfLines={1}
              >
                Questionnare
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 135,
                  paddingTop: 8,
                  paddingRight: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  borderBottomRightRadius: 999,
                  borderBottomLeftRadius: 999,
                  position: 'relative',
                  zIndex: 512,
                }}
              >
                <Text
                  style={{
                    height: 14,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 14,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 513,
                  }}
                  numberOfLines={1}
                >
                  24 November 2024
                </Text>
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
                zIndex: 514,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  gap: 40,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 515,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    gap: 40,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 516,
                  }}
                >
                  <View
                    style={{
                      width: 242,
                      height: 242,
                      flexShrink: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 999,
                      borderTopRightRadius: 999,
                      borderBottomRightRadius: 999,
                      borderBottomLeftRadius: 999,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 517,
                    }}
                  >
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: '-0.21%',
                        overflow: 'hidden',
                        zIndex: 519,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: '101.53%',
                          height: '101.96%',
                          position: 'absolute',
                          top: '-1.35%',
                          left: '-1.36%',
                          zIndex: 522,
                        }}
                        source={require('./assets/images/722b055d-e3e6-4dbd-9bb7-a5e6917d8a86.png')}
                      />
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 520,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 521,
                          }}
                          source={require('./assets/images/9c7ca4d5-95ad-48c3-8c5a-7ffd435a3c0c.png')}
                        />
                      </View>
                      <ImageBackground
                        style={{
                          width: '24.47%',
                          height: '60.41%',
                          position: 'absolute',
                          top: '24.33%',
                          left: '35.94%',
                          zIndex: 523,
                        }}
                        source={require('./assets/images/69148ffa-e1dc-4073-92b4-c3aaef132123.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '20.14%',
                          height: '38.34%',
                          position: 'absolute',
                          top: '34.86%',
                          left: '53.88%',
                          zIndex: 524,
                        }}
                        source={require('./assets/images/850ffc96-f8e5-4e1f-b500-d60fb37b24a7.png')}
                      />
                    </View>
                    <ImageBackground
                      style={{
                        width: '56.7%',
                        height: '56.7%',
                        position: 'absolute',
                        top: '21.65%',
                        left: '22.42%',
                        zIndex: 518,
                      }}
                      source={require('./assets/images/375a8c4d-d356-497e-b037-492fb8334913.png')}
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 353,
                      height: 68,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 33.6,
                      color: '#272727',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 525,
                    }}
                  >
                    Make eye contact with adults when speaking
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 250.621,
                    flexDirection: 'row',
                    gap: 27,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 526,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 527,
                    }}
                    source={require('./assets/images/eee5f9d1-3dcb-46c4-acf4-c94c0532c4b9.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 528,
                    }}
                    source={require('./assets/images/1871ed08-92b2-4310-97f5-214d09af1d1e.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 65.54,
                      height: 132.274,
                      flexShrink: 0,
                      borderTopLeftRadius: 22,
                      borderTopRightRadius: 22,
                      borderBottomRightRadius: 22,
                      borderBottomLeftRadius: 22,
                      position: 'relative',
                      zIndex: 529,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 531,
                        marginTop: 54.137,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 20.689,
                      }}
                      source={require('./assets/images/60c2db93-1e2e-474d-8d18-3c1f749566c5.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 65.54,
                        height: 132.274,
                        backgroundColor: '#17cd7e',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 530,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 20,
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 532,
                }}
              >
                <LinearGradient
                  colors={['#ffffff', '#efefef']}
                  useAngle={true}
                  angle={180}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 32,
                    paddingBottom: 15,
                    paddingLeft: 32,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 533,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 59,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 17.64,
                      color: '#ff6d2f',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 534,
                    }}
                    numberOfLines={1}
                  >
                    Previous
                  </Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#f9c75d', '#ffce8d']}
                  useAngle={true}
                  angle={178.57}
                  style={{
                    display: 'flex',
                    height: 55,
                    paddingTop: 15,
                    paddingRight: 40,
                    paddingBottom: 15,
                    paddingLeft: 40,
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    position: 'relative',
                    zIndex: 535,
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
                      zIndex: 536,
                    }}
                    numberOfLines={1}
                  >
                    Continue
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
