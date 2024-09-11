import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Meeting = ({ type, title, description, location, dateTime }) => {
  return (
    <View style={styles.card}>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>Type: {type}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.dateTime}>{dateTime}</Text>
      </View>
      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const MeetingList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <AntDesign name="arrowleft" size={24} color="black" />
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
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    marginRight: 16,
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    marginRight: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  typeContainer: {
    backgroundColor: '#E0F7FA',
    padding: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  typeText: {
    color: '#00796B',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  locationContainer: {
    marginBottom: 16,
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  dateTime: {
    fontSize: 12,
    color: '#666',
  },
  mapButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default Meeting;
