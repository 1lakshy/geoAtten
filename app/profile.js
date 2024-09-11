import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const attendanceData = [10, 20, 15, 30, 25, 40, 35];
const leaveData = {
  remaining: 12,
  applied: 3,
};
const performance = [
  { title: 'Promoted to Assistant Manager', date: '2024-07-15' },
  { title: 'Employee of the month', date: '2024-06-10' },
];

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.profileImage}
          />
          <Text style={styles.name}>Pooja Makhijani</Text>
          <Text style={styles.level}>Emp id: 230010</Text>
        </View>
      </View>

      {/* Attendance Graph */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance Overview</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                data: attendanceData.map(day => Math.min(day, 31)), 
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix=" days"
          yAxisInterval={1}
          fromZero={true}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0, 
            color: (opacity = 1) => `rgba(62, 176, 117, ${opacity})`, 
            strokeWidth: 2,
            propsForBackgroundLines: {
              strokeDasharray: '', 
              stroke: '#e3e3e3',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Leave Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Leave Information</Text>
        <View style={styles.leaveContainer}>
          <View style={styles.leaveItem}>
            <Icon name="calendar-today" size={24} color="#3EB075" />
            <Text style={styles.leaveText}>Remaining Leaves: {leaveData.remaining}</Text>
          </View>
          <View style={styles.leaveItem}>
            <Icon name="event" size={24} color="#FF6F61" />
            <Text style={styles.leaveText}>Applied Leaves: {leaveData.applied}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply for Leave</Text>
        </TouchableOpacity>
      </View>

      {/* Performance Trackers */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Performance Trackers</Text>
        {performance.map((item, index) => (
          <Card key={index} containerStyle={[styles.performanceCard, { borderColor: index % 2 === 0 ? '#3EB075' : '#5BC89C' }]}>
            <Text style={styles.performanceTitle}>{item.title}</Text>
            <Text style={styles.performanceDate}>{item.date}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Light grayish white
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#3EB075', // Medium green background
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#CDE8DC', // Very light green border
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF', // White text
  },
  level: {
    fontSize: 16,
    color: '#FFF',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  chart: {
    marginVertical: 10,
  },
  leaveContainer: {
    marginBottom: 10,
    
  },
  leaveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  leaveText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#3EB075', // Medium green
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  performanceCard: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#3EB075',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  performanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EB075', // Medium green text
  },
  performanceDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfilePage;