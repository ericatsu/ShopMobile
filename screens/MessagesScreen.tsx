import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}

const mockMessages: Message[] = [
  { id: '1', sender: 'John Doe', text: 'Hey, how are you?', timestamp: '10:00 AM' },
  { id: '2', sender: 'Jane Smith', text: 'I am good, how about you?', timestamp: '10:02 AM' },
  { id: '3', sender: 'John Doe', text: 'Doing great, thanks!', timestamp: '10:05 AM' },
  { id: '4', sender: 'Jane Smith', text: 'What are you up to?', timestamp: '10:07 AM' },
  { id: '5', sender: 'John Doe', text: 'Just working on a project.', timestamp: '10:10 AM' },
];

const goToSearch = () => {};

const MessagesScreen: React.FC = () => {
  return (
    <View className="flex-1 py-10 px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View className="flex flex-row items-center">
          <AntDesign name="message1" size={30} color="#333" />
          <Text className="text-2xl ml-2">Messages</Text>
        </View>
        <TouchableOpacity onPress={goToSearch}>
          <Ionicons name="search-outline" size={30} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`mb-4 p-4 rounded-lg ${item.sender === 'John Doe' ? 'bg-blue-100' : 'bg-green-100'}`}>
            <Text className="font-bold">{item.sender}</Text>
            <Text className="text-gray-700">{item.text}</Text>
            <Text className="text-gray-500 text-xs mt-2">{item.timestamp}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 2 }}
      />
    </View>
  );
}

export default MessagesScreen;
