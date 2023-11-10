import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Welcome = () => {

    const goToSearch = () => {
        navigation.navigate('Search')
      }

      const goToCamera = () => {
        navigation.navigate('Camera')
      }

      
  return (
    <View className="w-full">
      <Text className="font-bold text-3xl mt-2 ml-2 ">Find the best</Text>
      <Text className="font-bold text-lime-500 text-3xl mt-2 ml-2 ">Products today</Text>

      <View className="m-4 flex-row bg-gray-200 rounded-2xl p-2 items-center justify-center">
      <TouchableOpacity onPress={goToSearch} className="mx-20">
        <Ionicons name="search-outline" size={24} color="#8d8d8d"/> 
      </TouchableOpacity>
      <View className="flex-1">
      <Text className="font-semibold text-base ml-4 px-8">Search...</Text>
      </View>
      <TouchableOpacity onPress={goToCamera} >
         <Ionicons name="camera-outline" size={25} color="#8d8d8d"/>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default Welcome;