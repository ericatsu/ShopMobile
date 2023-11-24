import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

interface Product {
  _id: string;
  title: string;
  supplier: string;
  price: string;
  imageUrl: string;
  description: string;
  product_location: string;
}
interface ProductCardProps {
  navigation: any;
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ navigation, item }) => {

  const goToProduct = () => {
    navigation.navigate('ProductDetails', {item});
  };


  return (
    <TouchableOpacity onPress={goToProduct}>
      <View className="w-28 h-40 mt-2 mr-2  rounded-md">
        <View className="flex-1 w-28  rounded overflow-hidden">
          <Image
            source={{
              uri: item.imageUrl, 
            }}
            className="h-24 w-28 object-cover"
          />
        </View>

        <View className='p-1'>
          <Text className='text-sm font-semibold mb-1' numberOfLines={1}> {item.title} </Text>
          <Text className='text-xs mb-1' numberOfLines={1}> {item.supplier} </Text>
          <Text className='text-sm font-medium mb-1'> {item.price} </Text>
        </View>
        <TouchableOpacity className='absolute right-1 bottom-1'>
           <Ionicons name='add-circle' size={22} color={"#015346"}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
