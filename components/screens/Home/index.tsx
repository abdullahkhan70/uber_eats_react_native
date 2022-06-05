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
import {setResturantDataFilter} from '../../utils/redux/slices/resturantSlice';
import {Divider} from 'react-native-elements';
import BottomTabs from '../../navigation/BottomTabs';
const index = () => {
  const dispatch = useAppDispatch();
  const resturantData = useAppSelector(
    state => state.resturantSlice.resturantData,
  );
  const homeToolbarText = useAppSelector(
    state => state.homeToolbarSlice.homeToolbarText,
  );
  const handleHomeBtn = async (text: string) => {
    dispatch(setHomeToolbarText(String(text)));
    // const data = resturantData.filter((data: {transactions: []}) =>
    //   data.transactions.includes(text.toString().toLowerCase()),
    // );
    dispatch(setResturantDataFilter(String(text)));
  };
  useEffect(() => {
    console.log(YELP_API_KEY);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
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
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default index;
