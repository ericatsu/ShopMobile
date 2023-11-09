import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToSignUp = () => {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl mb-4">Welcome to the App!</Text>
      <TouchableOpacity onPress={goToSignUp} className="bg-blue-500 py-2 px-4 rounded">
        <Text className="text-white">Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;

