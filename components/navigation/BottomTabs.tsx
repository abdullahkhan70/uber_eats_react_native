import {View, Text, StyleSheet, PixelRatio} from 'react-native';
import React from 'react';
import Icons from './Icons';

const BottomTabs = () => {
  return (
    <View style={styles.bottomTabsMainView}>
      <Icons iconName={'home'} text={'Home'} />
      <Icons iconName={'search'} text={'Browse'} />
      <Icons iconName={'shopping-bag'} text={'Grocery'} />
      <Icons iconName={'receipt'} text={'Orders'} />
      <Icons iconName={'user'} text={'Account'} />
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomTabsMainView: {
    margin: PixelRatio.getPixelSizeForLayoutSize(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
  },
});
