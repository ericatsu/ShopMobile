import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {};

  return (
    <View className="flex items-center justify-center h-full">
      <Text className="mb-2">SignInScreen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8, width: 300 }}
        className="border mb-4 p-2 w-full"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8, width: 300 }}
        className="border mb-4 p-2 w-full"
      />
      <TouchableOpacity onPress={handleSignIn} className="bg-blue-500 px-4 py-2 rounded text-white mb-2">
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} className="text-blue-500 mb-2">
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Home' })} className="bg-blue-500 p-2 rounded text-white">
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignInScreen;
