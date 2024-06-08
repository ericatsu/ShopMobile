import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

interface Search {
  //navigation: { navigate: (screen: string, params?: object) => void };
  
  _id: string;
  title: string;
  supplier: string;
  price: string;
  imageUrl: string;
  description: string;
  product_location: string;
}

interface SearchTileProps {
  navigation: any;
  item: Search;
}

const SearchTile: React.FC<SearchTileProps> = ({ navigation, item }) => {
  const goToProductList = () => {
    navigation.navigate('ProductDetails', {item});
  };

  return (
    <TouchableOpacity onPress={goToProductList} className='flex-row bg-white p-4 m-2 rounded-lg shadow-md'>
        <Image source={{ uri: item.imageUrl }} className='w-20 h-20 rounded-lg'/>
      <View className='flex-1 ml-4 justify-center'>
        <Text className='text-lg font-bold text-gray-900'>{item.title}</Text>
        <Text className='text-sm text-gray-600'>{item.description}</Text>
        <Text className='text-base font-bold text-gray-900'>{item.price}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default SearchTile

