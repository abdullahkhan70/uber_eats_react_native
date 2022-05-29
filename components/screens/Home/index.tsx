import {View, Text, Alert, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/redux/hook';
import {FocusAwareStatusBar} from '../../customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {labels} from '../../utils/strings';
import {styles} from './styles';
import HomeToolbarButtons from './HomeToolbarButtons';
import {setHomeToolbarText} from '../../utils/redux/slices/homeToobarSlice';
import Searchbar from './Searchbar';
const index = () => {
  const dispatch = useAppDispatch();
  const handleHomeBtn = async (text: string) => {
    dispatch(setHomeToolbarText(String(text)));
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
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
    </SafeAreaView>
  );
};

export default index;
