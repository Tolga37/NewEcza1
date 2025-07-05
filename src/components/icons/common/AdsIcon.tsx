import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const AdsIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      fill={color}
    />
    <Path
      d="M17 11h-4V7h-2v4H7v2h4v4h2v-4h4v-2z"
      fill="#fff"
      stroke="#fff"
      strokeWidth="1"
    />
  </Svg>
);

export default AdsIcon; 