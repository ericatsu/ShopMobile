import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigators/BottomTabNavigation';
import WelcomeScreen from './screens/onboarding/WelcomeScreen'; 
import SignUpScreen from './screens/authentication/SignUpScreen';
import SignInScreen from './screens/authentication/SignInScreen';
import { NotificationScreen, CartScreen, SearchScreen, ProductDetails, NewRivals } from './screens';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#e7fcff" translucent = {true}/>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={NewRivals} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
