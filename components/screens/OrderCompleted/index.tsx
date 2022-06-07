import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import OrderDetails from './OrderDetails';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <OrderDetails />
    </SafeAreaView>
  );
};

export default index;
