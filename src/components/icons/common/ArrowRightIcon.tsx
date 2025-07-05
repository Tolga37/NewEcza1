import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const ArrowRightIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
      fill={color}
    />
  </Svg>
);

export default ArrowRightIcon; 