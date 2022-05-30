import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import {FocusAwareStatusBar} from '../../customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {endpoints, labels} from '../../utils/strings';
import {styles} from './styles';
import HomeToolbarButtons from './HomeToolbarButtons';
import {setHomeToolbarText} from '../../utils/redux/slices/homeToobarSlice';
import Searchbar from './Searchbar';
import Categories from './Categories';
import RestaurantItems from './RestaurantItems';
import {YELP_API_KEY} from 'react-native-dotenv';
const index = () => {
  const dispatch = useAppDispatch();
  const handleHomeBtn = async (text: string) => {
    dispatch(setHomeToolbarText(String(text)));
  };
  useEffect(() => {
    console.log(YELP_API_KEY);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(3),
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
      }}>
      <FocusAwareStatusBar
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.homeToolbarContainer}>
        <HomeToolbarButtons
          menuBtn={() => handleHomeBtn(labels.delivery)}
          menuButtonText={labels.delivery}
        />
        <HomeToolbarButtons
          menuBtn={() => handleHomeBtn(labels.pickup)}
          menuButtonText={labels.pickup}
        />
      </View>
      <Searchbar />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        snapToEnd={true}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <TouchableHighlight>
          <View>
            <Categories />
            <RestaurantItems />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
