import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const ProductRow = () => {
    const products = [1,2,3,4]
  return (
    <View className="mt-3">
    <FlatList 
      data={products}
      renderItem={({ item }) => { return <ProductCard/>; }}
      horizontal
      contentContainerStyle={{columnGap: 2}}
    />
    </View>
  )
}

export default ProductRow

