import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import {screens} from '../utils/strings';
import {Provider} from 'react-redux';
import {store} from '../utils/redux/Store';

const Stack = createNativeStackNavigator();

export const mainNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screens.HOME}>
          <Stack.Screen
            name={screens.HOME}
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
