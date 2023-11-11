import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigators/BottomTabNavigation';
import WelcomeScreen from './screens/onboarding/WelcomeScreen'; 
import SignUpScreen from './screens/authentication/SignUpScreen';
import SignInScreen from './screens/authentication/SignInScreen';
import { NotificationScreen, CartScreen, SearchScreen, ProductDetails } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
