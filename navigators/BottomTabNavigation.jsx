import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MessagesScreen, ProfileScreen, OrdersScreen, EwalletScreen} from "../screens/index";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Orders') {
          iconName = 'list';
        } else if (route.name === 'Messages') {
          iconName = 'chatbubbles';
        } else if (route.name === 'Ewallet') {
          iconName = 'wallet';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Ewallet" component={EwalletScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
