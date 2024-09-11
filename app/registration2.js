import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { userData } from './registration';
import axios from 'axios';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export var userData2 = []
const Registration2 = () => {
  const [formData, setFormData] = useState({
    gender: '',
    branch: '',
    idNumber: '',
    workingFloor: '', 
    password:'',
    companyId:'',
    faceData:'random'
  });

  const [object, setobject] = useState({})
  const router = useRouter(); // Initialize router

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async() => {
    // console.log(formData);
    var objectData = { ...userData[0], ...formData }
    console.log(objectData);
    userData2.push(objectData)
    // Add form submission logic here
    router.push('/homeScreen'); // Navigate to homeScreen    
    const response = await axios.post('https://smartattendance-2y68.onrender.com/register',userData2[0]);

  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Step 2 of 2</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="transgender-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={(value) => handleChange('gender', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Branch"
            value={formData.branch}
            onChangeText={(value) => handleChange('branch', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="card-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="ID Number"
            value={formData.idNumber}
            onChangeText={(value) => handleChange('idNumber', value)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="card-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Company Id"
            value={formData.companyId}
            onChangeText={(value) => handleChange('companyId', value)}
            // keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="time-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Working Floor"
            value={formData.workingFloor}
            onChangeText={(value) => handleChange('workingFloor', value)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
        <MaterialIcons name="password" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}

          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3EB075',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CDE8DC',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#3EB075',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Registration2;
