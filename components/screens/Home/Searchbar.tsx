import {View, Text, PixelRatio, Alert} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {labels} from '../../utils/strings';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import SearchbarButtons from './SearchbarButtons';
const Searchbar = () => {
  const handleSearchBarBtn = () => {
    Alert.alert('hello world!');
  };
  return (
    <View style={styles.searchBarMainView}>
      <GooglePlacesAutocomplete
        placeholder={labels.searchPlace}
        query={''}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 12,
            fontWeight: '700',
            marginRight: PixelRatio.getPixelSizeForLayoutSize(2),
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={styles.searchBarRenderLeftButton}>
              <SearchbarButtons
                iconBelong={'Ionicons'}
                iconName={'location'}
                onPress={handleSearchBarBtn}
                size={24}
              />
            </View>
          );
        }}
      />

      <SearchbarButtons
        iconBelong={'FontAwesome'}
        iconName={'filter'}
        onPress={handleSearchBarBtn}
        style={{marginLeft: PixelRatio.getPixelSizeForLayoutSize(4)}}
        size={26}
      />
    </View>
  );
};

export default Searchbar;
