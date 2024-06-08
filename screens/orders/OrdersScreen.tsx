import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OrderScreenProps {
  navigation: any;
}

const OrdersScreen = ({ navigation }: OrderScreenProps) => {
  const [activeTab, setActiveTab] = useState('Active');

  const tabs = ['Active', 'Completed', 'Cancelled'];

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const mockData = {
    Active: [
      { id: 1, order: 'Order #123', status: 'Shipped' },
      { id: 2, order: 'Order #124', status: 'Processing' },
    ],
    Completed: [
      { id: 3, order: 'Order #125', status: 'Delivered' },
      { id: 4, order: 'Order #126', status: 'Delivered' },
    ],
    Cancelled: [
      { id: 5, order: 'Order #127', status: 'Cancelled' },
      { id: 6, order: 'Order #128', status: 'Cancelled' },
    ],
  };

  const renderOrders = (orders: Array<{ id: number; order: string; status: string }>) => {
    return orders.map((order) => (
      <View key={order.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold">{order.order}</Text>
        <Text className="text-gray-600">{order.status}</Text>
      </View>
    ));
  };

  return (
    <View className="flex-1 py-10 px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View className="flex flex-row items-center">
          <Ionicons name="list-circle-outline" size={30} color="#333" />
          <Text className="text-2xl ml-2">Orders</Text>
        </View>
        <TouchableOpacity onPress={goToSearch}>
          <Ionicons name="search-outline" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      <View className="w-full">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleTabPress(tab)}
              className={`py-2 px-4 mx-1 rounded-full ${activeTab === tab ? 'bg-cyan-500' : 'bg-gray-200'}`}
            >
              <Text className={`${activeTab === tab ? 'text-white' : 'text-gray-800'}`}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="border-b border-gray-300 mb-4" />

      <ScrollView className="flex-1">
        {activeTab === 'Active' && renderOrders(mockData.Active)}
        {activeTab === 'Completed' && renderOrders(mockData.Completed)}
        {activeTab === 'Cancelled' && renderOrders(mockData.Cancelled)}
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;
