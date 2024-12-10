import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
              containerStyle={{paddingHorizontal: 10}}
  pages={[
    {
      backgroundColor: '#a7d2d0',
      image: (
        <View style={styles.lottie}>
          <LottieView source={require('../assets/animation.json')} autoPlay loop />
        </View>
      ),
      title: 'Boost Productivity',
      subtitle: 'Subscribe this channel to boost your productivity level',
    },
    {
      backgroundColor: '#a7f3d0',
      image: (
        <View >
          <Text>Hello Onboarding</Text>
        </View>
      ),
      title: 'Work Seamlessly',
      subtitle: 'Get your work done Seamlessly without interruption',
    },
    {
      backgroundColor: '#a7f3a0',
      image: (
        <View>
          <Text>Hello Onboarding</Text>
        </View>
      ),
      title: 'Higher Goals',
      subtitle: 'By boosting your productivity we help to you achieve higher goals',
    },
  ]}
/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: width*0.09,
    height: width,
  }
})