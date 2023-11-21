import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import  { Carousel } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const images = [
  'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderImageItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item }}
        style={{ width: '87%', height: 200, borderRadius: 10 }}
      />
    );
  };

  return (
    <View className="mr-5 ml-5">
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay
        autoplayInterval={2000}
        loop={true}
      />
    </View>
  );
};

export default ImageCarousel;
