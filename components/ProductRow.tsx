import { FlatList, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { useNavigation } from '@react-navigation/native'

const ProductRow = () => {
    const products = [1,2,3,4]
    const navigation = useNavigation();

  return (
    <View className="mt-2 ml-5 mr-5">
    <FlatList 
      data={products}
      renderItem={({ item }) => { return <ProductCard navigation={navigation}/>; }}
      horizontal
      contentContainerStyle={{columnGap: 2}}
    />
    </View>
  )
}

export default ProductRow

