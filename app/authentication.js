// // app/auth.js
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import * as LocalAuthentication from 'expo-local-authentication';
// import { useRouter } from 'expo-router';

// export default function AuthScreen() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     async function authenticate() {
//       const result = await LocalAuthentication.authenticateAsync();
//       if (result.success) {
//         setIsAuthenticated(true);
//         setTimeout(() => {
//           router.push('/homeScreen'); // Navigate to home screen
//         }, 2000);
//       } else {
//         setIsAuthenticated(false);
//       }
//     }
//     authenticate();
//   }, [router]);

//   return (
//     <View style={styles.container}>
//       <Text>{isAuthenticated ? "Your Attendance Has been marked" : "Invalid Attendance"}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      />
      <TouchableOpacity
        style={styles.flipButton}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Text style={styles.text}> Flip Camera </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 400,
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
  },
  flipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraScreen;




// import React, { useState } from 'react';
// import { Asset } from 'expo-asset';
// import { View, Text, Button, Alert } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   const [attendanceResults, setAttendanceResults] = useState([]);

//   const htmlFileUri = Asset.fromModule(require('../assets/face-recogination.html')).uri;

//   const handleWebViewMessage = (event) => {
//     const results = JSON.parse(event.nativeEvent.data);
//     const recognizedPeople = results.map(result => result.label);
//     setAttendanceResults(recognizedPeople);
//     Alert.alert('Attendance', `Recognized: ${recognizedPeople.join(', ')}`);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize: 20, marginBottom: 20 }}>Face Recognition Attendance</Text>
        
//         <WebView
//           source={{ uri: htmlFileUri }}
//           style={{ width: '100%', height: 400 }}
//           javaScriptEnabled={true}
//           onMessage={handleWebViewMessage}
//         />
        
//         <Button title="Check Attendance" onPress={() => console.log('Attendance Results:', attendanceResults)} />
        
//         <View style={{ marginTop: 20 }}>
//           {attendanceResults.length > 0 && (
//             <Text>Recognized People: {attendanceResults.join(', ')}</Text>
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;
