import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../home.styles';
import { Welcome } from '../../components';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate('Cart');
  }

  const goToNoti = () => {
    navigation.navigate('Notification')
  }

  

  return (
    <SafeAreaView>
      <View className="mx-22 mt-1 ml-5 mr-5">
      <View className="flex-row justify-between items-center mb-4 ">
        
          <Ionicons name="location-outline" size={30} color="#8d8d8d"/>
          
       
        <Text className="text-base ml-3">Accra, Ghana</Text>

        
         <View className="flex flex-row">
          <TouchableOpacity onPress={goToCart}>
            <Ionicons name="cart-outline" size={30} color="#333" />
          </TouchableOpacity>
          <View className="absolute bottom-5 w-5 h-5 rounded-lg items-center bg-lime-500 justify-center z-99">
            <Text className="font-semibold text-slate-50">6</Text>
          </View>
         </View>

        
      </View>
       
      
      
    </View>

    <ScrollView>
      <Welcome/>
    </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
