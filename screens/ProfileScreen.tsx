import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

type Activity = {
  id: string;
  description: string;
  date: string;
};

const activities: Activity[] = [
  { id: '1', description: 'Logged in', date: '2024-06-07' },
  { id: '2', description: 'Updated profile picture', date: '2024-06-06' },
  { id: '3', description: 'Changed password', date: '2024-06-05' },
];

const profile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
};

const ProfileScreen: React.FC = () => {
  const renderActivity = ({ item }: { item: Activity }) => (
    <View className="bg-white p-4 my-2 mx-4 rounded-lg shadow-md">
      <Text className="text-lg font-semibold">{item.description}</Text>
      <Text className="text-gray-500">{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="light" />
      <View className="bg-cyan-500 p-6 rounded-b-2xl mb-4 items-center">
        <Image
          source={{ uri: profile.profilePicture }}
          className="w-32 h-32 rounded-full border-4 border-white shadow-md"
        />
        <Text className="text-white text-2xl font-semibold mt-4">{profile.name}</Text>
        <Text className="text-white text-lg">{profile.email}</Text>
      </View>

      
      <TouchableOpacity className="bg-cyan-500 p-4 rounded-lg shadow-md mx-4 mt-4">
        <Text className="text-white text-center text-lg font-bold">Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-red-500 p-4 rounded-lg shadow-md mx-4 mt-4">
        <Text className="text-white text-center text-lg font-bold">Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
