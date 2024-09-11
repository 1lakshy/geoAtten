import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Manual Check-in Check-out</Text>

      {/* Icons Section */}
      <View style={styles.iconContainer}>
        
        <View style={styles.logoContainer}>
        <FontAwesome name="calendar-check-o" size={100} color="#2DBE60" />
        </View>
       
      </View>

      {/* Description */}
      <Text style={styles.description}>
        On the days you have to work from some other campus utilize the option to manualy check-in
      </Text>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      {/* Next Button */}
      <Link href="/registration" style={styles.button}>
        <Text style={styles.buttonText}>Login/Register</Text>
      </Link>

      {/* Skip Button with Icon */}
      {/* <Link href="/skip" style={styles.skipContainer}>
        <Text style={styles.skipText}>Skip</Text>
  
      </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E6F4EC',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2DBE60',
  },
  description: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#2DBE60',
  },
  button: {
    backgroundColor: '#2DBE60',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  skipText: {
    color: '#2DBE60',
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
});

export default OnboardingScreen;
