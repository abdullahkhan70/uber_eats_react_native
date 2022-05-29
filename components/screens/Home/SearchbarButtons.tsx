import {TouchableOpacity, PixelRatio, ViewStyle} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface SearchbarButtonsProps {
  iconName: string;
  iconBelong: string;
  onPress?: () => void;
  style?: ViewStyle;
  size?: number;
}

const SearchbarButtons = (props: SearchbarButtonsProps) => {
  switch (props.iconBelong) {
    case 'Entypo':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <Entypo
            name={props.iconName}
            size={PixelRatio.getPixelSizeForLayoutSize(8)}
            onPress={props.onPress}
            size={props.size}
          />
        </TouchableOpacity>
      );
    case 'FontAwesome':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <FontAwesome
            name={props.iconName}
            size={PixelRatio.getPixelSizeForLayoutSize(8)}
            onPress={props.onPress}
            size={props.size}
          />
        </TouchableOpacity>
      );
    case 'Ionicons':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <Ionicons
            name={props.iconName}
            size={PixelRatio.getPixelSizeForLayoutSize(8)}
            onPress={props.onPress}
            size={props.size}
          />
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

export default SearchbarButtons;
