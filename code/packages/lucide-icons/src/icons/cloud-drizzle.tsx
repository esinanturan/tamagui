import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" stroke={color} />
      <Path d="M8 19v1" stroke={color} />
      <Path d="M8 14v1" stroke={color} />
      <Path d="M16 19v1" stroke={color} />
      <Path d="M16 14v1" stroke={color} />
      <Path d="M12 21v1" stroke={color} />
      <Path d="M12 16v1" stroke={color} />
    </Svg>);

};

Icon.displayName = 'CloudDrizzle';

export const CloudDrizzle = React.memo<IconProps>(themed(Icon));