import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

type Transaction = {
  id: string;
  description: string;
  amount: string;
  date: string;
};

const transactions: Transaction[] = [
  { id: '1', description: 'MacBook', amount: '-$50.00', date: '2024-06-01' },
  { id: '2', description: 'Laptop', amount: '+$1500.00', date: '2024-06-01' },
  { id: '3', description: 'Iphone', amount: '-$4.50', date: '2024-05-30' },
  { id: '4', description: 'Electric Bill', amount: '-$75.00', date: '2024-05-28' },
];

const EwalletScreen: React.FC = () => {
  const renderTransaction = ({ item }: { item: Transaction }) => (
    <TouchableOpacity className="bg-white p-4 my-2 mx-4 rounded-lg shadow-md flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-semibold">{item.description}</Text>
        <Text className="text-gray-500">{item.date}</Text>
      </View>
      <Text className={`${item.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'} text-lg`}>
        {item.amount}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="bg-cyan-500 p-6 rounded-b-2xl mb-4 shadow-lg">
        <Text className="text-white text-2xl font-semibold">Balance</Text>
        <Text className="text-white text-4xl font-bold mt-2">$1245.50</Text>
      </View>
      <Text className="text-lg font-semibold px-4 mb-2">Recent Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        className="pt-2"
      />
    </SafeAreaView>
  );
};

export default EwalletScreen;
