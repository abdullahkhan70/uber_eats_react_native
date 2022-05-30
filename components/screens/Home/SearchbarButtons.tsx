import {TouchableOpacity, PixelRatio, ViewStyle} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface SearchbarButtonsProps {
  iconName: string;
  iconBelong: string;
  onPress?: () => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
}

const SearchbarButtons = (props: SearchbarButtonsProps) => {
  switch (props.iconBelong) {
    case 'Entypo':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <Entypo
            name={props.iconName}
            onPress={props.onPress}
            size={props.size}
            color={props.color}
          />
        </TouchableOpacity>
      );
    case 'FontAwesome':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <FontAwesome
            name={props.iconName}
            onPress={props.onPress}
            size={props.size}
            color={props.color}
          />
        </TouchableOpacity>
      );
    case 'Ionicons':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <Ionicons
            name={props.iconName}
            onPress={props.onPress}
            size={props.size}
            color={props.color}
          />
        </TouchableOpacity>
      );

    case 'AntDesign':
      return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
          <AntDesign
            name={props.iconName}
            onPress={props.onPress}
            size={props.size}
            color={props.color}
          />
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

export default SearchbarButtons;
