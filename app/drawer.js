import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen';
import ProfileScreen from './profile';
// import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
        </Drawer.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
