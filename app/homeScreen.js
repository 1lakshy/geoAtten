import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import gStyles from "../styles"
import SearchComponent from '../components/Search';
import * as Progress from 'react-native-progress';
import colors from '../color';
import CarouselSlider from '../components/carouselSlider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Meeting from '../components/meeting';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { isWithinRadius } from '../features/locationChecker';

const HomeScreen = () => {
  const [attendance, setAttendance] = useState(21);
  const [progress, setProgress] = useState(.7);
  const windowWidth = Dimensions.get('window').width;

  const data = [
    { id: '1', title: 'Meetings' },
    { id: '2', title: 'Announcements' },
    { id: '3', title: 'Holidays' },
  ];
  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Text style={{ fontWeight: '900', fontSize: 22 }}>{item.title}</Text>
    </View>
  );
  return (
    <View>
      <View style={styles.topNav}>
        <Link href="/Screens/ManualScreen"> 
        <Feather name="menu" size={24} color="black" />
        </Link>

        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View style={gStyles.subMain}>
        <View>
          <Text style={gStyles.subHeadingGray}>Good Morning</Text>
          <Text style={gStyles.headingBlack}>Rakesh</Text>
          <View style={styles.sliderParent}>
            <View style={styles.sliderNav}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="trophy-sharp" size={24} color={colors.secondary} />
                <Text style={styles.text}>Your Goal</Text>
              </View>
              <View>
                <Text style={styles.text}>{attendance}</Text>
              </View>
            </View>

            <View>
              {/* <Slider
                style={{ width: "100%", height: 50, color: "white" }}
                minimumValue={0}
                maximumValue={30}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={attendance}
                disabled={true}
                trackStyle={{ height: 20 }}

              /> */}
              <Progress.Bar
                progress={progress}
                height={5}
                width={windowWidth - 80}
                color={colors.secondary}
                unfilledColor={colors.tritary}
                borderWidth={0}
                marginTop={20}
                marginBottom={20}

              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View >
                <Text style={styles.text2}>Great Job on progress</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Link href="/profile">
                <Text style={styles.text2}>View All</Text>
                </Link>
                
                <MaterialIcons name="navigate-next" size={14} color={colors.secondary} />
              </View>
            </View>
          </View>
        </View>

        <SearchComponent />
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
          {/* <CarouselSlider/> */}
          <View style={styles.container}>
      {/* <View style={styles.back}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </View> */}
      <View style={{marginVertical:20,elevation:5,width:350,height:200,backgroundColor:colors.secondary,padding:15,borderRadius:20}}>
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
          <Link href="/Screens/MapScreen">
          <Text style={{ color: "white" }}>
            Get Direction
          </Text>
          </Link>

        </View>
      </View>
    </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  topNav: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    // backgroundColor: colors.primary,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  sliderNav: {
    display: "flex",
    flexDirection: "row",
    height: 25,
    alignItems: "center",
    justifyContent: "space-between",

  },
  sliderParent: {
    padding: 20,
    backgroundColor: colors.primary,
    height: "max-content",
    borderRadius: 20,
    borderRadius: 25,
    color: colors.secondary,
    marginVertical: 15
  },
  text: {
    color: colors.secondary,
    marginLeft: 10, fontWeight: '800', fontSize: 18
  },
  text2: {
    color: colors.secondary,
    marginLeft: 10, fontWeight: '800', fontSize: 14
  },
  btn: { flexDirection: "row", width: 300, paddingHorizontal: 25, alignItems: "center", paddingVertical: 15, justifyContent: "center", borderRadius: 10, backgroundColor: colors.primary, marginTop: 10 }
})