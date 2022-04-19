import {createElement} from 'react';
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

export const CustomIcon = props => {
  const {type, style, icon, size, color} = props;
  let typeClass;

  //set typeClass
  switch (type) {
    case 'AntDesign':
      typeClass = AntDesign;
      break;
    case 'Ionicons':
      typeClass = Ionicons;
      break;
    case 'FontAwesome':
      typeClass = FontAwesome;
      break;
    case 'FontAwesome5':
      typeClass = FontAwesome5;
      break;
  }

  //render element
  return createElement(
    typeClass,
    {style: style, name: icon, size: size, color: color},
    null,
  );
};
