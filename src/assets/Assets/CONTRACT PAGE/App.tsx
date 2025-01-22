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
            width: 1900,
            height: 1628,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderStyle: 'solid',
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
              width: 1500,
              paddingTop: 40,
              paddingRight: 48,
              paddingBottom: 40,
              paddingLeft: 48,
              flexDirection: 'row',
              gap: 36,
              alignItems: 'center',
              flexWrap: 'nowrap',
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 999,
              borderTopRightRadius: 999,
              borderBottomRightRadius: 999,
              borderBottomLeftRadius: 999,
              position: 'relative',
              zIndex: 170,
              marginTop: 200,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 200,
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
                zIndex: 171,
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 172,
                }}
              >
                <ImageBackground
                  style={{
                    width: 48,
                    height: 48,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 173,
                  }}
                  source={require('./assets/images/11311cfc-992c-4aad-8e45-cd897541400f.png')}
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
                zIndex: 174,
              }}
              numberOfLines={1}
            >
              Contact Management
            </Text>
          </View>
          <View
            style={{
              width: 1083,
              height: 852,
              position: 'relative',
              zIndex: 167,
              marginTop: 201,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 200,
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
                flexWrap: 'nowrap',
                position: 'absolute',
                top: 0,
                left: 0,
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
                    source={require('./assets/images/4f387bc6-8f68-4c61-8732-6cae79bf8d91.png')}
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
                    source={require('./assets/images/ded5ed32-03f4-4b49-b99a-96ea9b2ae7d6.png')}
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
                  source={require('./assets/images/d51cc886-fdf2-4e98-a59a-3cae39df10b2.png')}
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
                  source={require('./assets/images/29f3aea1-31d8-4391-bc1f-d51383640707.png')}
                  resizeMode='cover'
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 12,
                  paddingRight: 20,
                  paddingBottom: 12,
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
                <Text
                  style={{
                    display: 'flex',
                    width: 91,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 20,
                    fontWeight: '600',
                    lineHeight: 24,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 12,
                  }}
                  numberOfLines={1}
                >
                  Contacts
                </Text>
                <View
                  style={{
                    display: 'flex',
                    width: 40,
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    flexDirection: 'row',
                    gap: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: '#ff6d2f',
                    borderTopLeftRadius: 999,
                    borderTopRightRadius: 999,
                    borderBottomRightRadius: 999,
                    borderBottomLeftRadius: 999,
                    position: 'relative',
                    zIndex: 13,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 14,
                    }}
                    source={require('./assets/images/852509f1-bea6-4639-83ef-7d81a89cc5db.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 8,
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
                  zIndex: 15,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                    paddingLeft: 12,
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: 'relative',
                    zIndex: 16,
                  }}
                >
                  <Text
                    style={{
                      height: 17,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 16.8,
                      color: '#5c5c5c',
                      letterSpacing: -0.14,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 17,
                    }}
                    numberOfLines={1}
                  >
                    Search name or number....
                  </Text>
                  <ImageBackground
                    style={{
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 18,
                    }}
                    source={require('./assets/images/741b1b2b-2b06-48d7-a332-a42ff511e4f3.png')}
                    resizeMode='cover'
                  />
                </View>
                <Text
                  style={{
                    height: 22,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 19,
                  }}
                  numberOfLines={1}
                >
                  All Contact
                </Text>
                <View
                  style={{
                    display: 'flex',
                    width: 353,
                    gap: 16,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 20,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 21,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 22,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
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
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 24,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/765b2a28-9c27-4e73-b091-8087c4d00e0f.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 25,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 26,
                          }}
                          numberOfLines={1}
                        >
                          Marilyn Passaquindici&nbsp;
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 27,
                          }}
                          numberOfLines={1}
                        >
                          Parent
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 28,
                      }}
                      source={require('./assets/images/e50c2f82-9d46-4db3-a9b8-3f0cb3d08c06.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 29,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 30,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
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
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 32,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/b43ff8b4-71a3-44b4-ba3c-1b9cbc6d3892.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 33,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 34,
                          }}
                          numberOfLines={1}
                        >
                          Kadin Culhane
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 35,
                          }}
                          numberOfLines={1}
                        >
                          Teacher
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 36,
                      }}
                      source={require('./assets/images/d1068e4a-72ac-4e9a-b581-d6a092eb7216.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 37,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 38,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 39,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 40,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/8facfb45-572b-4524-8884-550687758882.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 41,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 42,
                          }}
                          numberOfLines={1}
                        >
                          Adison Lipshutz
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 43,
                          }}
                          numberOfLines={1}
                        >
                          Parent
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 44,
                      }}
                      source={require('./assets/images/6afef100-dc74-42d5-8188-d14debeece4e.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 45,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 46,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 47,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 48,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/1aa9583a-25fa-44cd-9500-317ab4b4cd5f.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 49,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 50,
                          }}
                          numberOfLines={1}
                        >
                          Cristofer Carder
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 51,
                          }}
                          numberOfLines={1}
                        >
                          Teacher
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 52,
                      }}
                      source={require('./assets/images/549180ff-2eca-4a46-9f95-22e159158ee7.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 53,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 54,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 55,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 56,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/51104515-116c-4082-8d03-f0c520c56e5d.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 57,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 58,
                          }}
                          numberOfLines={1}
                        >
                          Marcus Dias
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 59,
                          }}
                          numberOfLines={1}
                        >
                          Child
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 60,
                      }}
                      source={require('./assets/images/d4fe5f71-5229-4ef7-8b32-72cd744161c6.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 61,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 62,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
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
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 64,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/23ab3fc3-23de-4a16-a3e3-e75339df33a3.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 65,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 66,
                          }}
                          numberOfLines={1}
                        >
                          Corey Siphron
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 67,
                          }}
                          numberOfLines={1}
                        >
                          FINC Monitor
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 68,
                      }}
                      source={require('./assets/images/588ebe16-6809-4264-b420-42d1cc5b6243.png')}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 393,
                  paddingTop: 20,
                  paddingRight: 20,
                  paddingBottom: 20,
                  paddingLeft: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  position: 'relative',
                  zIndex: 69,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 70,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 18,
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 71,
                    }}
                    numberOfLines={1}
                  >
                    Home
                  </Text>
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 72,
                    }}
                    source={require('./assets/images/77937d27-6629-49d2-9d35-364661368bb7.png')}
                    resizeMode='cover'
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 73,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 18,
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 74,
                    }}
                    numberOfLines={1}
                  >
                    Documents
                  </Text>
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 75,
                    }}
                    source={require('./assets/images/361f61f3-07c5-41cc-985b-72d6ab4c9603.png')}
                    resizeMode='cover'
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 76,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 18,
                      color: '#fe4e11',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 77,
                    }}
                    numberOfLines={1}
                  >
                    Contacts
                  </Text>
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 78,
                    }}
                    source={require('./assets/images/a867bfb8-7d5d-43f0-b0b5-35cc26ba08ab.png')}
                    resizeMode='cover'
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 79,
                  }}
                >
                  <Text
                    style={{
                      height: 18,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 18,
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 80,
                    }}
                    numberOfLines={1}
                  >
                    Settings
                  </Text>
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 81,
                    }}
                    source={require('./assets/images/ea538c10-2044-4f6e-be0d-28fdc9122b0c.png')}
                    resizeMode='cover'
                  />
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
                top: 0,
                left: 493,
                overflow: 'hidden',
                zIndex: 82,
              }}
            >
              <View
                style={{
                  width: 393,
                  height: 44,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 83,
                }}
              >
                <View
                  style={{
                    width: 375,
                    height: 44,
                    position: 'absolute',
                    top: 0,
                    left: 9,
                    zIndex: 84,
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
                    zIndex: 92,
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
                    zIndex: 85,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 22,
                      height: 13,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      zIndex: 86,
                      transform: [{ translateY: -6.5 }, { translateX: -12.17 }],
                    }}
                    source={require('./assets/images/5384e63b-9496-4239-8bd1-99dd1e5c4164.png')}
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
                      zIndex: 87,
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
                      zIndex: 89,
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
                      zIndex: 88,
                      transform: [{ translateY: -1.69 }, { translateX: 10.83 }],
                    }}
                    source={require('./assets/images/64a284b5-389e-4f54-9923-99e2d745be52.png')}
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
                    zIndex: 90,
                  }}
                  source={require('./assets/images/a08ef110-d747-4b85-8f26-ccf61d531321.png')}
                />
                <ImageBackground
                  style={{
                    width: 17.308,
                    height: 11.538,
                    position: 'absolute',
                    top: 15,
                    left: '50%',
                    zIndex: 91,
                    transform: [{ translateY: 0 }, { translateX: 96.5 }],
                  }}
                  source={require('./assets/images/feede18e-1514-4786-b73b-ad5743056ba1.png')}
                  resizeMode='cover'
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 12,
                  paddingRight: 20,
                  paddingBottom: 12,
                  paddingLeft: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 93,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: 91,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 20,
                    fontWeight: '600',
                    lineHeight: 24,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 94,
                  }}
                  numberOfLines={1}
                >
                  Contacts
                </Text>
                <View
                  style={{
                    display: 'flex',
                    width: 40,
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    flexDirection: 'row',
                    gap: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: '#ff6d2f',
                    borderTopLeftRadius: 999,
                    borderTopRightRadius: 999,
                    borderBottomRightRadius: 999,
                    borderBottomLeftRadius: 999,
                    position: 'relative',
                    zIndex: 95,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 96,
                    }}
                    source={require('./assets/images/60166bd0-77b3-4271-8d51-4e92f525417e.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 8,
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
                  zIndex: 97,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    paddingTop: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                    paddingLeft: 12,
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: 'relative',
                    zIndex: 98,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 99,
                    }}
                    source={require('./assets/images/b745ac26-3f83-4fbc-9669-2cb141e19d71.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      height: 17,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 16.8,
                      color: '#5c5c5c',
                      letterSpacing: -0.14,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 100,
                    }}
                    numberOfLines={1}
                  >
                    Search name or number....
                  </Text>
                </View>
                <Text
                  style={{
                    height: 22,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#272727',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 101,
                  }}
                  numberOfLines={1}
                >
                  All Contact
                </Text>
                <View
                  style={{
                    display: 'flex',
                    width: 353,
                    gap: 16,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 102,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 103,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 104,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 105,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 106,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/f83e04e7-d6a7-4b42-9a33-b05e94b8e8af.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 107,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 108,
                          }}
                          numberOfLines={1}
                        >
                          Marilyn Passaquindici&nbsp;
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 109,
                          }}
                          numberOfLines={1}
                        >
                          Parent
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 110,
                      }}
                      source={require('./assets/images/93f47f92-79a9-4727-92a7-536bffffe8f9.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 111,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 112,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 113,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 114,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/5890bb6e-7615-4f4c-b2fb-41843936ffe7.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 115,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 116,
                          }}
                          numberOfLines={1}
                        >
                          Kadin Culhane
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 117,
                          }}
                          numberOfLines={1}
                        >
                          Teacher
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 118,
                      }}
                      source={require('./assets/images/51bc4672-d1f3-4204-98c6-e39f8212d7fa.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 119,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 120,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 121,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 122,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/de36f7f1-a8e7-49d5-b8d6-e4f192412244.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 123,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 124,
                          }}
                          numberOfLines={1}
                        >
                          Adison Lipshutz
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 125,
                          }}
                          numberOfLines={1}
                        >
                          Parent
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 126,
                      }}
                      source={require('./assets/images/9a823bd9-7e4c-4fb9-96bf-c10f1c1e185f.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 127,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 128,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 129,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 130,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/7fdfc9e6-1eb9-4273-b0fe-146eb8702cc6.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 131,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 132,
                          }}
                          numberOfLines={1}
                        >
                          Cristofer Carder
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 133,
                          }}
                          numberOfLines={1}
                        >
                          Teacher
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 134,
                      }}
                      source={require('./assets/images/93b3c19c-8500-404b-b033-a0f92f6574f9.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 135,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 136,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 137,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 138,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/281d37fb-459e-476b-90d7-b84f2d6557da.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 139,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 140,
                          }}
                          numberOfLines={1}
                        >
                          Marcus Dias
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 141,
                          }}
                          numberOfLines={1}
                        >
                          Child
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 142,
                      }}
                      source={require('./assets/images/e71bb697-d58c-4bda-a090-05e454419746.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 40,
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomRightRadius: 16,
                      borderBottomLeftRadius: 16,
                      position: 'relative',
                      zIndex: 143,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: '0',
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 144,
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundColor: '#ffd775',
                          borderTopLeftRadius: 113,
                          borderTopRightRadius: 113,
                          borderBottomRightRadius: 113,
                          borderBottomLeftRadius: 113,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 145,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 43.918,
                            height: 56.907,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 146,
                            marginTop: 6.804,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 8.022,
                          }}
                          source={require('./assets/images/79f12de5-4a88-4d11-8ebf-b76a6fa7aa49.png')}
                        />
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          gap: 3,
                          alignItems: 'flex-start',
                          flexGrow: 1,
                          flexShrink: 0,
                          flexBasis: '0',
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 147,
                        }}
                      >
                        <Text
                          style={{
                            height: 21,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20.8,
                            color: '#272727',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 148,
                          }}
                          numberOfLines={1}
                        >
                          Corey Siphron
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            alignSelf: 'stretch',
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#5c5c5c',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 149,
                          }}
                          numberOfLines={1}
                        >
                          FINC Monitor
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 150,
                      }}
                      source={require('./assets/images/64b3d332-aeea-4b1a-ba52-ca49e6c38d9e.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      width: 153,
                      height: 44,
                      paddingTop: 12,
                      paddingRight: 12,
                      paddingBottom: 12,
                      paddingLeft: 12,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      borderBottomLeftRadius: 8,
                      position: 'absolute',
                      top: 54,
                      left: 193,
                      zIndex: 151,
                    }}
                  >
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
                        zIndex: 152,
                      }}
                      numberOfLines={1}
                    >
                      Delete Contact
                    </Text>
                    <ImageBackground
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 153,
                      }}
                      source={require('./assets/images/f341307a-2495-4f1c-b2c0-0113c8e5d40d.png')}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 393,
                  paddingTop: 20,
                  paddingRight: 20,
                  paddingBottom: 20,
                  paddingLeft: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  position: 'relative',
                  zIndex: 154,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 155,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 156,
                    }}
                    source={require('./assets/images/51b08948-19d6-4f9f-9025-6f047f08566d.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      height: 18,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 18,
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 157,
                    }}
                    numberOfLines={1}
                  >
                    Home
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 158,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 159,
                    }}
                    source={require('./assets/images/90c29fc5-a24d-4896-9df5-635d89e9fc24.png')}
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
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 160,
                    }}
                    numberOfLines={1}
                  >
                    Documents
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 161,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 162,
                    }}
                    source={require('./assets/images/941c183e-eb8f-4974-a651-e3f1fd4ee285.png')}
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
                      color: '#fe4e11',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 163,
                    }}
                    numberOfLines={1}
                  >
                    Contacts
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 164,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 165,
                    }}
                    source={require('./assets/images/cea30c8c-0008-4819-bf08-b7ffe8903e87.png')}
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
                      color: '#cccccc',
                      letterSpacing: -0.28,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 166,
                    }}
                    numberOfLines={1}
                  >
                    Settings
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View
              style={{
                display: 'flex',
                width: 153,
                height: 44,
                paddingTop: 12,
                paddingRight: 12,
                paddingBottom: 12,
                paddingLeft: 12,
                flexDirection: 'row',
                gap: 8,
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                position: 'absolute',
                top: 178,
                left: 930,
                zIndex: 167,
              }}
            >
              <ImageBackground
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 168,
                }}
                source={require('./assets/images/b2789d89-9e65-4397-8f6c-56042c2da8e1.png')}
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
                  zIndex: 169,
                }}
                numberOfLines={1}
              >
                Delete Contact
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
