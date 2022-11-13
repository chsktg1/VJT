import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import ProductBuilder from '../ProductBuilder';
import g1 from '../../../assets/g1.jpeg';
import g2 from '../../../assets/g2.jpeg';

import r1 from '../../../assets/r1.jpeg';
import r2 from '../../../assets/r2.jpeg';
import r3 from '../../../assets/r3.jpeg';

const Home = () => {
  const Images = [g1, g2, g1, g2];
  const ProductImages = [
    {source: r1, name: 'Rice'},
    {source: r2, name: 'Millets'},
    {source: r3, name: 'other products'},
  ];
  const [imgActive, setImgActive] = useState(0);

  const handleScroll = ({nativeEvent}) => {
    setImgActive(Math.floor(nativeEvent.contentOffset.x / width));
  };

  return (
    <ScrollView>
      <View>
        <ScrollView
          onScroll={handleScroll}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {Images.map((item, index) => (
            <View key={index}>
              <Image style={styles.imageStyling} source={item} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.carouselController}>
          {Images.map((image, index) => {
            return (
              <Text
                key={index}
                style={
                  imgActive === index
                    ? styles.activeCarouselControllerText
                    : styles.carouselControllerText
                }>
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.ourProductsText}>Our Products</Text>
        <ScrollView>
          {ProductImages.map((e, i) => (
            <ProductBuilder source={e.source} name={e.name} key={i} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyling: {
    width: Math.round(width * 0.98),
    resizeMode: 'cover',
    margin: 5,
    marginBottom: 0,
    marginTop: 5,
    height: Math.round((width * 60) / 100),
  },
  carouselController: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  carouselControllerText: {
    color: '#888',
    margin: 4,
  },
  activeCarouselControllerText: {
    color: 'white',
    margin: 4,
  },
  ourProductsText: {
    textAlign: 'center',
    fontSize: 20,
  },
  productView: {
    margin: 10,
  },
  productName: {
    color: 'white',
    alignSelf: 'flex-end',
    fontSize: 30,
  },
  BackgroundImg: {
    width: '100%',
    height: 200,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Home;
