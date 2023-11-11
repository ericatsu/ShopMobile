import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <TouchableOpacity onPress={{}}>
       <View classname="w-182 h-240 me-0.5 bg-slate-500 rounder-md">
       <View className="flex-1 w-178 ml-4 mt-5 rounded overflow-hidden">
        <Image 
          source={{uri: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
        />
       </View>
       </View>
    </TouchableOpacity>
  )
}

export default ProductCard;
