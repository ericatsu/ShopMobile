import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-center bg-slate-300 p-3 rounded-2xl m-3">
      <TouchableOpacity onPress={() => {}} >
         <Ionicons name="camera-outline" size={25} color="#8d8d8d"/>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} className="flex-1 ml-2">
          <TextInput
            value=''
            onPressIn={() => {}}
            placeholder='What are you looking for'
          />
        </TouchableOpacity>
      
      <Ionicons name="search-outline" size={24} color="#8d8d8d"/>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen