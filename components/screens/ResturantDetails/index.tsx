import {View, Text, PixelRatio} from 'react-native';
import React, {useEffect} from 'react';
import About from './About';
import {FocusAwareStatusBar} from '../../customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {Divider} from 'react-native-elements';
import MenuItems from './MenuItems';
import {useAppSelector} from '../../utils/redux/hook';
import ViewCartButton from './ViewCartButton';
import ViewCartModal from './ViewCartModal';
import {dummyMenuItems} from '../../utils/list/dummyMenuItems';
const index = () => {
  const selAboutData = useAppSelector(state => state.resturantSlice.aboutData);
  const selSelectedMenuItems = useAppSelector(
    state => state?.resturantSlice?.selectedMenuItems,
  );
  const selViewCartModal = useAppSelector(
    state => state?.resturantSlice?.viewCartModal,
  );
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
      <MenuItems data={dummyMenuItems} checkBox={true} />
      {selSelectedMenuItems.length > 0 ? <ViewCartButton /> : <View />}
      {selViewCartModal ? <ViewCartModal /> : <View />}
    </View>
  );
};

export default index;
