/*import React, { useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselComponentProps {
  images: string[]; 
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImageItem = ({ item }: { item: string }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: item }}
          style={{ width: screenWidth - 40, height: 200, borderRadius: 10 }}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop: -15 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CarouselComponent;
*/