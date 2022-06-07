import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, OrderCompleted, RestuarantDetails} from '../screens';
import {screens} from '../utils/strings';
import {Provider} from 'react-redux';
import {store} from '../utils/redux/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking, Platform} from 'react-native';
const Stack = createNativeStackNavigator();

export const mainNavigation = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <Stack.Navigator initialRouteName={screens.HOME}>
          <Stack.Screen
            name={screens.HOME}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={screens.RESTUARANTDETAILS}
            component={RestuarantDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={screens.ORDERCOMPLETED}
            component={OrderCompleted}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
