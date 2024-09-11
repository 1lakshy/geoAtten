// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window');

// const CarouselSlider = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         {item}
//       </View>
//     );
//   };

//   const items = [
//     <Text style={styles.text}>Component 1</Text>,
//     <Text style={styles.text}>Component 2</Text>,
//     <Text style={styles.text}>Component 3</Text>
//   ];

//   return (
//     <Carousel
//       data={items}
//       renderItem={renderItem}
//       sliderWidth={screenWidth}
//       itemWidth={screenWidth}
//       layout={'default'}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     marginHorizontal: 5,
//     elevation: 5,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });

// export default CarouselSlider;