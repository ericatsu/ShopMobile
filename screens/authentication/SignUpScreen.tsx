import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {};

  return (
    <View className="flex items-center justify-center h-full">
      <Text className="mb-4 text-xl">Sign Up Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        className="w-3/4 border mb-4 p-2"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        className="w-3/4 border mb-4 p-2"
      />
      <TouchableOpacity onPress={handleSignUp} className="bg-blue-500 p-2 rounded text-white mb-4">
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} className="mb-2">
        <Text>Already have an account? Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Home' })} className="bg-blue-500 p-2 rounded text-white">
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpScreen;
