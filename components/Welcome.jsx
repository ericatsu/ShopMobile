import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();
  
    const goToSearch = () => {
        navigation.navigate('Search')
      }

      const goToCamera = () => {
        navigation.navigate('Camera')
      }


  return (
    <View className="w-full ml-2">
      <Text className="font-bold text-3xl mt-2 ml-2 ">Find the best</Text>
      <Text className="font-bold text-lime-500 text-3xl mt-2 ml-2 ">Products today</Text>

      <View className="flex flex-row items-center justify-center bg-slate-300 p-3 rounded-2xl m-3">
        <Ionicons name="search-outline" size={24} color="#8d8d8d"/> 
        <TouchableOpacity onPress={goToSearch} className="flex-1 ml-2">
          <Text >Search...</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={goToCamera} >
         <Ionicons name="camera-outline" size={25} color="#8d8d8d"/>
      </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default Welcome;