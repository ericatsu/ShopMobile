import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Headings = () => {
  return (
    <View className="mt-3 mx-5">
      <View className="flex-row justify-between">
       <Text className="font-semibold text-2xl">New Rivals</Text>
       <TouchableOpacity>
         <Ionicons name='ios-grid' size={24} />
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

