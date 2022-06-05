import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useAppSelector} from '../../utils/redux/hook';

const images = require('../../../assets/images/cooking_pic_1.jpg');
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai - Comfort Food - $$ - ticket - 4 stars - (2894+)';

const About = () => {
  const selAboutData = useAppSelector(state => state.resturantSlice.aboutData);

  const {name, image_url, price, review_count, rating, categories} =
    selAboutData;
  const formattedCategories = categories?.map(item => item.title).join(' • ');
  const desc = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • ${rating} stars • (${review_count}+)`;

  return (
    <>
      <Image
        source={{uri: image_url}}
        resizeMode={'cover'}
        style={styles.aboutImage}
      />
      <View style={styles.aboutInnerView}>
        <Text
          style={styles.aboutTitle}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {name}
        </Text>
        <Text style={styles.descriptionText}>{desc}</Text>
      </View>
    </>
  );
};

export default About;
