import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OrderScreenProps {
   navigation: any;
}

const OrdersScreen = ({ navigation }: OrderScreenProps ) => {
  const [activeTab, setActiveTab] = useState('Active');

  const tabs = ['Active', 'Completed', 'Cancelled'];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  }

  const goToSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <View className="flex-1 py-10 px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View className="flex flex-row items-center">
          <Ionicons name="list-circle-outline" size={30} color="#333" />
          <Text className="text-2xl ml-2">Orders</Text>
        </View>
        <View className="flex flex-row">
          <TouchableOpacity onPress={goToSearch}>
            <Ionicons name="search-outline" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row justify-between">
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            className={`py-2 px-4 ${activeTab === tab ? 'text-cyan-400' : ''}`}
          >
            <Text>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="border-b border-gray-300 mb-2" />

      {activeTab === 'Active' && (
        <View>
          <Text className="text-center justify-center items-center">Section 1</Text>
        </View>
      )}

      {activeTab === 'Completed' && (
        <View>
          <Text className="text-center justify-center items-center">Section 2</Text>
        </View>
      )}

      {activeTab === 'Cancelled' && (
        <View>
          <Text className="text-center justify-center items-center">Section 3</Text>
        </View>
      )}
    </View>
  );
}

export default OrdersScreen;
