import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

interface ProductCardProps {
  navigation: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ navigation }) => {

  const goToProduct = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <TouchableOpacity onPress={goToProduct}>
      <View className="w-28 h-40 mt-2 mr-2 bg-slate-200 rounded-md">
        <View className="flex-1 w-28  rounded overflow-hidden">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              
            }}
            className="h-24 w-28 object-cover"
          />
        </View>

        <View className='p-1'>
          <Text className='text-sm font-semibold mb-1' numberOfLines={1}> Product Title </Text>
          <Text className='text-xs mb-1' numberOfLines={1}> Product Title </Text>
          <Text className='text-sm font-medium mb-1'> $799.9 </Text>
        </View>
        <TouchableOpacity className='absolute right-1 bottom-1'>
           <Ionicons name='add-circle' size={22} color={"#015346"}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
