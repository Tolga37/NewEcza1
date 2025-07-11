import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const HeartIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3c1.74,0 3.41,0.81 4.5,2.08C13.09,3.81 14.76,3 16.5,3 19.58,3 22,5.41 22,8.5c0,3.77-3.4,6.86-8.55,11.53L12,21.35z"
      fill={color}
    />
  </Svg>
);

export default HeartIcon; 