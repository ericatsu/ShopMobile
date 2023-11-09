import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate('Cart');
  }

  const goToNoti = () => {
    navigation.navigate('Notification')
  }

  const goToSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <View className="flex-1 py-10 px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View className="flex flex-row items-center">
          <Ionicons name="person-circle-outline" size={30} color="#333" />
          <Text className="text-2xl ml-2">John Doe</Text>
        </View>
        <View className="flex flex-row">
          <TouchableOpacity onPress={goToNoti} className="mr-4">
            <Ionicons name="notifications-outline" size={30} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToCart}>
            <Ionicons name="cart-outline" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={goToSearch} className="bg-gray-200 rounded p-2">
        <Text>Search...</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
