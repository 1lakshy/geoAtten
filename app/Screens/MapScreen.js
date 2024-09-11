// import React, { useEffect, useRef, useState } from 'react';
// import { WebView } from 'react-native-webview';
// import { Asset } from 'expo-asset';
// import { StyleSheet, View } from 'react-native';
// import * as Location from 'expo-location';

// const MapScreen = () => {
//   const webViewRef = useRef(null);
//   const [location, setLocation] = useState(null);

//   const htmlFileUri = Asset.fromModule(require('../assets/leaflet-map.html')).uri;

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//       console.log(location);
//     })();
//   }, []);

//   useEffect(() => {
//     if (location && webViewRef.current) {
//       const jsCode = `
//         window.userLocation = { latitude: ${location.latitude}, longitude: ${location.longitude} };
//         initMap();
//       `;
//       webViewRef.current.injectJavaScript(jsCode);
//     }
//   }, [location]);

//   return (
//     <View style={styles.container}>
//       <WebView
//         style={styles.webview}
//         originWhitelist={['*']}
//         source={{ uri: htmlFileUri }}
//         ref={webViewRef}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         onMessage={(event) => console.log(event.nativeEvent.data)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     flex: 1,
//   },
// });

// export default MapScreen;

// import React, { useEffect, useRef, useState } from 'react';
// import { WebView } from 'react-native-webview';
// import { Asset } from 'expo-asset';
// import { StyleSheet, View } from 'react-native';
// import * as Location from 'expo-location';
// import AntDesign from '@expo/vector-icons/AntDesign';

// const MapScreen = () => {
//   const webViewRef = useRef(null);
//   const [location, setLocation] = useState(null);

//   const htmlFileUri = Asset.fromModule(require('../assets/leaflet-map.html')).uri;

//   useEffect(() => {
//     (async () => {
//       // Request location permissions
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       // Function to handle location updates
//       const handleLocationUpdate = (newLocation) => {
//         setLocation({
//           latitude: newLocation.coords.latitude,
//           longitude: newLocation.coords.longitude,
//         });
//       };

//       // Start watching the location with a 1-minute interval
//       const locationSubscription = await Location.watchPositionAsync(
//         {
//           accuracy: Location.Accuracy.High,
//           timeInterval: 60000, // Update every 1 minute (60000 milliseconds)
//           distanceInterval: 0, // Optional: Set to 0 to update regardless of distance
//         },
//         (location) => handleLocationUpdate(location)
//       );

//       // Cleanup function to stop watching location on component unmount
//       return () => {
//         if (locationSubscription) {
//           locationSubscription.remove();
//         }
//       };
//     })();
//   }, []);

//   useEffect(() => {
//     if (location && webViewRef.current) {
//       const jsCode = `
//         window.userLocation = { latitude: ${location.latitude}, longitude: ${location.longitude} };
//         if (typeof initMap === 'function') {
//           initMap();
//         }
//       `;
//       webViewRef.current.injectJavaScript(jsCode);
//     }
//   }, [location]);
// console.log(location)
//   return (
//     <View style={styles.container}>
//       <View style={styles.back}>
//       <AntDesign name="arrowleft" size={24} color="black" />
//       </View>
//       <WebView
//         style={styles.webview}
//         originWhitelist={['*']}
//         source={{ uri: htmlFileUri }}
//         ref={webViewRef}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         onMessage={(event) => console.log(event.nativeEvent.data)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     flex: 1,
//     position:"relative"
//   },
//   back:{
//     position:"absolute",
//     zIndex:100,
//     backgroundColor:"red",
//     marginTop:200
//   }
// });

// export default MapScreen;



import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../color';
import Feather from '@expo/vector-icons/Feather';
import gStyles from "../../styles"
import { Link, router } from 'expo-router';
import { isWithinRadius } from '../../features/locationChecker';
const MapScreen = () => {
  const webViewRef = useRef(null);
  const [location, setLocation] = useState(null);

  const htmlFileUri = Asset.fromModule(require('../../assets/leaflet-map.html')).uri;

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Function to handle location updates
      const handleLocationUpdate = (newLocation) => {
        setLocation({
          latitude: newLocation.coords.latitude,
          longitude: newLocation.coords.longitude,
          altitude: newLocation.coords.altitude,  // Capture altitude
        });
      };

      // Start watching the location with a 1-minute interval
      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 60000, // Update every 1 minute (60000 milliseconds)
          distanceInterval: 0, // Optional: Set to 0 to update regardless of distance
        },
        (location) => handleLocationUpdate(location)
      );
      // const targetLat = 19.064088;
      // const targetLon = 72.835888;
      const targetLat = 19.120752501674566;
      const targetLon = 72.84573761047166;
      const radius = 600 // Radius in meters
      console.log(location.latitude)
      console.log(location.longitude)
      // console.log(isWithinRadius(location.latitude, location.longitude, targetLat, targetLon, radius))
      if (isWithinRadius(location.latitude, location.longitude, targetLat, targetLon, radius)) {
        router.push("/authentication")
      }
      // Cleanup function to stop watching location on component unmount
      return () => {
        if (locationSubscription) {
          locationSubscription.remove();
        }
      };
    })();
  }, [location]);

  useEffect(() => {
    if (location && webViewRef.current) {
      const jsCode = `
        window.userLocation = { latitude: ${location.latitude}, longitude: ${location.longitude} };
        if (typeof initMap === 'function') {
          initMap();
        }
      `;
      webViewRef.current.injectJavaScript(jsCode);
    }
  }, [location]);

  // console.log(location);

  return (
    <View style={styles.container}>
      {/* WebView component */}
      <WebView
        style={styles.webview}
        originWhitelist={['*']}
        source={{ uri: htmlFileUri }}
        ref={webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={(event) => console.log(event.nativeEvent.data)}
      />

      {/* Foreground component */}
      <View style={styles.back}>

        <Link href="/homeScreen">
          <AntDesign name="arrowleft" size={24} color="black" />
        </Link>

      </View>
      <View style={styles.down}>
        <Text style={gStyles.subTextBlack}>
          Project WritingPen Metting
        </Text>
        <Text>
          Discuss project milestones and assign tasks
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 10, paddingHorizontal: 5 }}>
          <Ionicons name="location-sharp" size={24} color={colors.primary} />
          <Text style={gStyles.smallTextBlack}>New Link Rd, Phase D, Oshiwara, Andheri West, Mumbai, Maharashtra 400053</Text>
        </View>
        <Text>Monday, September 1,2024| 1:00-2:00 PM</Text>
        <View style={styles.btn}>
          <Ionicons name="navigate-circle" size={24} color="white" />
          <Text style={{ color: "white" }}>
            Get Direction
          </Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensure that child components are positioned relative to this container
  },
  webview: {
    flex: 1,
  },
  back: {
    position: 'absolute',
    top: 50, // Adjust position as needed
    left: 20, // Adjust position as needed
    backgroundColor: 'white', // Added background color to make the icon more visible
    padding: 15,
    borderRadius: 25,
    zIndex: 1000, // Ensure that the zIndex is high enough to be on top
  },
  down: {
    position: 'absolute',
    bottom: 40, // Adjust position as needed
    left: 30, // Adjust position as needed
    backgroundColor: 'white', // Added background color to make the icon more visible
    padding: 15,
    borderRadius: 25,
    zIndex: 1000, // Ensure that the zIndex is high enough to be on top
    width: 340,
    height: 200
  },
  btn: { flexDirection: "row", width: 300, paddingHorizontal: 25, alignItems: "center", paddingVertical: 15, justifyContent: "center", borderRadius: 10, backgroundColor: colors.primary, marginTop: 10 }
});

export default MapScreen;
