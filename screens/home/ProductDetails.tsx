import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState}from 'react'
import { useRoute } from '@react-navigation/native';
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

interface ProductDetailProps {
  navigation: any;
}

const ProductDetails = ({ navigation }: ProductDetailProps) => {
  const route = useRoute();
  const {item} = route.params;
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  

  return (
    <View className='flex-1 bg-black'>
      <View className='flex-row items-center justify-between absolute z-10 mx-3 top-10 w-11/12'>
       <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='chevron-back' size={30} color="white"/>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='heart' size={30} color="white"/>
       </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
          
        }}
        className="h-2/4 object-cover"
      />

      <View className='rounded-t-2xl h-2/4 mt-[-10] bg-slate-50 w-full'>
        <View className='mx-4 flex-row justify-between items-center  top-5'>
          <Text className='font-bold text-2xl'>{item.title}</Text>
          <View className='bg-lime-100 rounded-2xl p-2'>
          <Text className='font-semibold text-base'> {item.price} </Text>
          </View>
        </View>

        <View className='mx-4 flex-row justify-between items-center top-6'>
           <View className='top-2 flex-row justify-start items-center'>
            {[1,2,3,4,5].map((index) => (
              <Ionicons
               key={index}
               name='star'
               size={22}
               color="gold"
              />
            ))}

            <Text className='font-semibold text-base text-slate-500'>  (4.9)</Text>
           </View>

           <View className='top-2 flex-row justify-end items-center'>
              <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
               name='plus'
               size={20}
              />
              </TouchableOpacity>
            <Text className='font-semibold text-base'> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
               name='minus'
               size={20}
              />
              </TouchableOpacity>
           </View>
        </View>

        <View className='mt-10 mx-5'>
          <Text className='font-semibold text-base'>{item.description}</Text>
          <Text className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam est ut scelerisque auctor. Etiam eget egestas enim. Maecenas et mauris quis ipsum dapibus efficitur vitae consectetur ex. Ut rhoncus felis finibus ligula molestie, eget viverra eros venenatis.</Text>
        </View>

        <View className='mt-4 ml-4'>
          <View className='flex-row justify-between items-center bg-lime-100 rounded-2xl p-2 mr-3'>
            <View className='flex-row items-center'>
            <Ionicons
              name='location-outline'
              size={24}
            />
            <Text> {item.product_location}</Text>
            </View>

            <View className='flex-row items-center'>
            <MaterialCommunityIcons
              name='truck-delivery-outline'
              size={24}
            />
            <Text> Free Delivery</Text>
            </View>
          </View>
        </View>
        <View className='px-5 flex-row pb-5 justify-between items-center mt-4'>
        <TouchableOpacity onPress={() => {}} className='w-52 rounded-2xl bg-black p-3'>
              <Text className='font-semibold text-base text-white'> BUY NOW </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => {}} className='w-12 h-12 rounded-full bg-black p-2 items-center justify-center'>
             <Fontisto
              name='shopping-bag'
              size={22}
              color={'#ffff'}
             /> 
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails