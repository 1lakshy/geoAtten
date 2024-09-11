import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(animatedValue.value, { duration: 1000 }),
    transform: [{ scale: withTiming(animatedValue.value, { duration: 1000 }) }],
  }));

  useEffect(() => {
    animatedValue.value = 1;
  }, []);

  const handleAnimationFinish = () => {
    setTimeout(() => setShowContent(true), 0);
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/geoimg.json')}
        autoPlay
        loop={false}
        onAnimationFinish={handleAnimationFinish}
        style={styles.lottie}
      />
      {/* <Animated.Text style={[styles.appName, animatedStyle]}>
        AppName
      </Animated.Text> */}
      {showContent && (
        <>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Link href="/onboarding" asChild>
              <TouchableOpacity>
                <Icon name="arrow-right" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </Link>
          </Animated.View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Privacy Policy | Terms and Conditions Apply</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA', // Light background color matching the animation
    paddingHorizontal: 20,
  },
  lottie: {
    width: 400,
    height: 300,
    marginBottom:-60,
    marginTop:-90,
    
  },
  button: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: '#26E97F', // Bright green to match the animation's color
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
   
},

  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333333', // Dark gray for text to match the soft color scheme
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    
  },
  footerText: {
    color: '#6D6D6D', // Soft gray for footer text
    fontSize: 14,
    opacity: 0.8,
  },
});
