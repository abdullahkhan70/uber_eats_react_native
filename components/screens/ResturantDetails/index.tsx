import {View, Text, PixelRatio} from 'react-native';
import React, {useEffect} from 'react';
import About from './About';
import {FocusAwareStatusBar} from '../../customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {Divider} from 'react-native-elements';
import MenuItems from './MenuItems';
import {useAppSelector} from '../../utils/redux/hook';
import ViewCartButton from './ViewCartButton';

const index = () => {
  const selAboutData = useAppSelector(state => state.resturantSlice.aboutData);
  useEffect(() => {
    console.log(JSON.stringify(selAboutData));
  }, []);
  return (
    <View style={{flex: 1}}>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <About />
      <Divider
        width={0.5}
        style={{marginVertical: PixelRatio.getPixelSizeForLayoutSize(4)}}
      />
      <MenuItems />
      <ViewCartButton />
    </View>
  );
};

export default index;
