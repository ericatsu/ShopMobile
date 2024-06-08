import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Headings = () => {
  const navigation = useNavigation();

  const goToNewRivals = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View className="mt-3 mx-5">
      <View className="flex-row justify-between">
       <Text className="font-semibold text-2xl">New Rivals</Text>
       <TouchableOpacity onPress={goToNewRivals}>
         <Ionicons name='grid' size={24} />
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

