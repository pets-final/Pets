import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, Image } from 'react-native';
import { ActivityIndicator } from 'react-native';

const HomeCarousel = () => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef();

  const onChange = ({ window }) => {
    setDimension(window);
  };
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(prevSelectedIndex =>
        prevSelectedIndex === carouselImages.length - 1 ? 0 : prevSelectedIndex + 1
      );
      scrollRef.current.scrollTo({
        animated: true,
        y: 0,
        x: dimension.width * selectedIndex,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [dimension.width, selectedIndex]);

  const carouselImages = [
    { url: 'https://cdn.media.amplience.net/i/petsathome/hp-promo-phase-catlitter-2for20/.webp?w=720&' },
    { url: 'https://www.crbgroup.com/wp-content/uploads/2019/11/processed-pet-foods-mobile-scaled.jpg' },
    { url: 'https://nextlevelpetfood.com/cdn/shop/files/NextLevel_Render_Composition_5_PurposeLine_RGB_25.png?v=1693230150&width=1500'},
    { url: 'https://supertails.com/cdn/shop/files/5th_may_web_2-min_1600x.png?v=1715925375' },
    { url: 'https://supertails.com/cdn/shop/files/20th_may_web_4-min_1600x.png?v=1716183548' },
  ];

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View style={{ width: dimension.width }}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {carouselImages.map((value, key) => (
          <Image
            key={key}
            source={{ uri: `${value.url}` }}
            style={[styles.image, { width: dimension.width }]}
            PlaceholderContent={<ActivityIndicator />}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {carouselImages.map((val, key) => (
          <Text
            key={key}
            style={key === selectedIndex ? styles.paginationActiveText : styles.paginationText}
          >
            -
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
   width: '100%',
    height: 200,
    // borderRadius: 15,
    marginHorizontal: 0.0001,
    resizeMode: 'cover',
    padding: 10,
    margin:50
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationText: {
    color: '#888',
    margin: 3,
    fontSize: 16,
  },
  paginationActiveText: {
    color: 'white',
    margin: 3,
    fontSize: 16,
  },
});

export default HomeCarousel;